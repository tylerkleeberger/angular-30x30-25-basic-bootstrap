import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthorizationService } from '../login/authorization.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService: AuthorizationService,
    private dataStorageService: DataStorageService) {}

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  onLogout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.storePrimaryItems();
  }

  onFetchData() {
    this.dataStorageService.fetchPrimaryItems()
  }

}
