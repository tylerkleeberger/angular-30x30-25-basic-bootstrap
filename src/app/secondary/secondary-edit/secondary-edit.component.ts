import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SecondaryModel } from 'src/app/shared/secondary.model';
import { SecondaryService } from '../secondary.service';

@Component({
  selector: 'app-secondary-edit',
  templateUrl: './secondary-edit.component.html',
  styleUrls: ['./secondary-edit.component.css']
})
export class SecondaryEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', {static: false}) secondaryForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: SecondaryModel;

  constructor( private secondaryService: SecondaryService) {}

  ngOnInit() {
    this.subscription = this.secondaryService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.secondaryService.getSecondary(index);
        this.secondaryForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        }) 
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSecondaryItem = new SecondaryModel(value.id, value.name, value.amount);
    if (this.editMode) {
      this.secondaryService.updateSecondaryItem(this.editedItem);
    } else {
      this.secondaryService.addSecondaryItem(newSecondaryItem);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.secondaryForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.secondaryService.deleteSecondaryItem(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
