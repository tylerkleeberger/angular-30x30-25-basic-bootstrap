import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SecondaryModel } from '../shared/secondary.model';


const BASE_URL = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class SecondaryService {

  constructor(
    private http: HttpClient
  ) { }

  //basic service methods
  getSecondaries() {
    return this.secondaryItems.slice();
  }

  getSecondary(index: number) {
    return this.secondaryItems[index];
  }

  //Methods to simplify REST/CRUD

//** Used for URL methods to connect to variable
model = 'secondaryItems';

private getUrl() {
  return `${BASE_URL}/${this.model}`;
}

private getUrlWithID(id) {
  return `${this.getUrl()}/${id}`;
}


//Get All
getSecondaryItems(): Observable<SecondaryModel[]> {
  return this.http.get<SecondaryModel[]>(this.getUrl());
}

//Get One
getSecondaryItem(id: number | string): Observable<SecondaryModel> {
  const url = `${this.getUrl()}/${id}`;
  return this.http.get<SecondaryModel>(url);
}

//Add
addSecondaryItem(secondaryItem: SecondaryModel) {
  return this.http.post<SecondaryModel>(this.getUrl(), secondaryItem)
}

addSecondaryItems(secondaryItems: SecondaryModel[]) {
  return this.http.post<SecondaryModel[]>(this.getUrl(), secondaryItems)
}

//Update
updateSecondaryItem(secondaryItem: SecondaryModel) {
  return this.http.put<SecondaryModel>(this.getUrlWithID(secondaryItem.id), secondaryItem)
}

//delete
deleteSecondaryItem(id: number) {
  return this.http.delete(this.getUrlWithID(id));
}





//setting param URL for item
private secondaryItems: SecondaryModel[] = [];

getItemUrl(index: number) {
  return this.secondaryItems[index];
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}

startedEditing = new Subject<number>();


}
