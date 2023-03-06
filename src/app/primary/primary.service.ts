import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecondaryService } from '../secondary/secondary.service';
import { SecondaryModel } from '../shared/secondary.model';
import { PrimaryModel } from './primary.model';


//** Used for API Server **
const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PrimaryService {

  constructor(
    private secondaryService: SecondaryService,
    private http: HttpClient
  ) { }

//basic service methods
getPrimaries() {
  return this.primaryItems.slice();
}

getPrimary(index: number) {
  return this.primaryItems[index]
}
  

//Methods to simplify REST/CRUD

//** Used for URL methods to connect to variable
model = 'primaryItems';

private getUrl() {
  return `${BASE_URL}/${this.model}`;
}

private getUrlWithID(id) {
  return `${this.getUrl()}/${id}`;
}


//Get All
getPrimaryItems(): Observable<PrimaryModel[]> {
  return this.http.get<PrimaryModel[]>(this.getUrl());
}

//Get One
getPrimaryItem(id: number | string): Observable<PrimaryModel> {
  const url = `${this.getUrl()}/${id}`;
  return this.http.get<PrimaryModel>(url);
}

//Add
addPrimaryItem(primaryItem: PrimaryModel) {
  return this.http.post<PrimaryModel>(this.getUrl(), primaryItem)
}

//Update
updatePrimaryItem(primaryItem: PrimaryModel) {
  return this.http.put<PrimaryModel>(this.getUrlWithID(primaryItem.id), primaryItem)
}

//delete
deletePrimaryItem(id: number) {
  return this.http.delete(this.getUrlWithID(id));
}

//interact with other item
addSecondaryItemstoSecondaryList(secondaryItems: SecondaryModel[]) {
  this.secondaryService.addSecondaryItems(secondaryItems);
}



//setting param URL for item
private primaryItems: PrimaryModel[] = [
  // new PrimaryModel(
  //   1,
  //   'Alpha',
  //   'This is the alpha description',
  //   [new SecondaryModel(1, 'Uno', 1)]
  // ),
  // new PrimaryModel(
  //   2,
  //   'Beta',
  //   'This is the beta description',
  //   [new SecondaryModel(1, 'Dos', 20)]
  // )

];



getItemUrl(index: number) {
  return this.primaryItems[index];
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}

}
