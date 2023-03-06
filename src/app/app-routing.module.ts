import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { AuthorizationComponent } from './login/authorization/authorization.component';
import { PrimaryDetailComponent } from './primary/primary-detail/primary-detail.component';
import { PrimaryEditComponent } from './primary/primary-edit/primary-edit.component';
import { PrimaryStartComponent } from './primary/primary-start/primary-start.component';
import { PrimaryComponent } from './primary/primary/primary.component';
import { SecondaryComponent } from './secondary/secondary/secondary.component';

const routes: Routes = [
  { path: '', redirectTo: '/primary', pathMatch: 'full' },
  {
    path: 'primary',
    component: PrimaryComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PrimaryStartComponent },
      { path: 'new', component: PrimaryEditComponent },
      {
        path: ':id',
        component: PrimaryDetailComponent,
      },
      {
        path: ':id/edit',
        component: PrimaryEditComponent,
      }
    ]
  },
  { path: 'secondary', component: SecondaryComponent },
  { path: 'login', component: AuthorizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
