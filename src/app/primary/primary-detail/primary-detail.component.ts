import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PrimaryModel } from '../primary.model';
import { PrimaryService } from '../primary.service';

@Component({
  selector: 'app-primary-detail',
  templateUrl: './primary-detail.component.html',
  styleUrls: ['./primary-detail.component.css']
})
export class PrimaryDetailComponent implements OnInit {

  primaryItem: PrimaryModel;
  id: number;

  constructor(
    private primaryService: PrimaryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.primaryItem = this.primaryService.getItemUrl(this.id);
        }
      );
  }

  onAddtoSecondaryList() {
    this.primaryService.addSecondaryItemstoSecondaryList(this.primaryItem.secondaryItems);
  }

  onEditPrimaryItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeletePrimaryItem() {
    this.primaryService.deletePrimaryItem(this.id);
    this.router.navigate(['/primary']);
  }
  

}
