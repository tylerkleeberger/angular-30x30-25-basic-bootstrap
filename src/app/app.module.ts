import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AuthorizationComponent } from './login/authorization/authorization.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { PrimaryComponent } from './primary/primary/primary.component';
import { PrimaryDetailComponent } from './primary/primary-detail/primary-detail.component';
import { PrimaryEditComponent } from './primary/primary-edit/primary-edit.component';
import { PrimaryListComponent } from './primary/primary-list/primary-list.component';
import { PrimaryItemComponent } from './primary/primary-list/primary-item/primary-item.component';
import { PrimaryStartComponent } from './primary/primary-start/primary-start.component';
import { SecondaryComponent } from './secondary/secondary/secondary.component';
import { SecondaryEditComponent } from './secondary/secondary-edit/secondary-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    DashboardComponent,
    PlaceholderDirective,
    DropdownDirective,
    PrimaryComponent,
    PrimaryDetailComponent,
    PrimaryEditComponent,
    PrimaryListComponent,
    PrimaryItemComponent,
    PrimaryStartComponent,
    SecondaryComponent,
    SecondaryEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
