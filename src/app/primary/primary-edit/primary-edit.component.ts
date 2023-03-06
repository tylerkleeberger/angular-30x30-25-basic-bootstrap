import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PrimaryService } from '../primary.service';

@Component({
  selector: 'app-primary-edit',
  templateUrl: './primary-edit.component.html',
  styleUrls: ['./primary-edit.component.css']
})
export class PrimaryEditComponent implements OnInit{
  id: number;
  editMode: boolean = false;
  primaryItemForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private primaryService: PrimaryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  onSubmit() {
    if (this.editMode) {
      this.primaryService.updatePrimaryItem(this.primaryItemForm.value);
    } else {
      this.primaryService.addPrimaryItem(this.primaryItemForm.value)
    }
    this.onCancel();
  }

  onAddSecondaryItem() {
    (<FormArray>this.primaryItemForm.get('secondaryItems')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteSecondaryItem(index: number) {
    (<FormArray>this.primaryItemForm.get('secondaryItems')).clear()
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let primaryItemName = '';
    let primaryItemDescription = '';
    let primaryItemSecondaryItems = new FormArray([]);

    if (this.editMode) {
      const primaryItem = this.primaryService.getPrimary(this.id);
      primaryItemName = primaryItem.name;
      primaryItemDescription = primaryItem.description;
      if (primaryItem['secondaryItems']) {
        for (let secondaryItem of primaryItem.secondaryItems) {
          primaryItemSecondaryItems.push(
            new FormGroup({
              name: new FormControl(secondaryItem.name, Validators.required),
              amount: new FormControl(secondaryItem.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.primaryItemForm = new FormGroup({
      name: new FormControl(primaryItemName, Validators.required),
      description: new FormControl(primaryItemDescription, Validators.required),
      secondaryItems: primaryItemSecondaryItems
    });
  }

  get controls() {
    return (<FormArray>this.primaryItemForm.get('secondaryItems')).controls;
  }


}
