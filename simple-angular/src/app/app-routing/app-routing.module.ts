import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesListComponent } from '../groceries-list/groceries-list.component';

const appRoutes: Routes = [
  {
    path: 'groceries',
    component: GroceriesListComponent
  },
  {
    path: '',
    redirectTo: '/groceries',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
