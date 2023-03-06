import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecondaryModel } from 'src/app/shared/secondary.model';
import { SecondaryService } from '../secondary.service';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit{
  secondaryItems: SecondaryModel[];
  private subscription: Subscription;

  constructor(
    private secondaryService: SecondaryService,
  ) {}

  ngOnInit() {
    this.secondaryItems = this.secondaryService.getSecondaries();
  }


  onEditItem(secondaryItem) {
    this.secondaryService.updateSecondaryItem(secondaryItem);
  }



}
