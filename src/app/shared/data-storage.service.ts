import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../login/authorization.service';
import { PrimaryService } from '../primary/primary.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private primaryService: PrimaryService,
    private authService: AuthorizationService
  ) { }

  storePrimaryItems() {
    const primaryItems = this.primaryService.getPrimaryItems();
  }

  fetchPrimaryItems() {
    this.primaryService.getPrimaryItems();
  }


}
