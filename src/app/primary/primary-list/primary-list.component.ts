import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PrimaryModel } from '../primary.model';
import { PrimaryService } from '../primary.service';

@Component({
  selector: 'app-primary-list',
  templateUrl: './primary-list.component.html',
  styleUrls: ['./primary-list.component.css']
})
export class PrimaryListComponent implements OnInit {

  primaryItems: PrimaryModel[];
  subscription: Subscription;

  constructor(
    private primaryService: PrimaryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.primaryItems = this.primaryService.getPrimaries();
  }

  onNewPrimaryItem() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }



}
