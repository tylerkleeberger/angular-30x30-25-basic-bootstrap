import { Component, Input } from '@angular/core';
import { PrimaryModel } from '../../primary.model';

@Component({
  selector: 'app-primary-item',
  templateUrl: './primary-item.component.html',
  styleUrls: ['./primary-item.component.css']
})
export class PrimaryItemComponent {
  @Input() primaryItem: PrimaryModel;
  @Input() index: number;

}
