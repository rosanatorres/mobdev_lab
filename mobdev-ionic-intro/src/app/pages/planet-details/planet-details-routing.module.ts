import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleDetailsPage } from './planet-details.page';

const routes: Routes = [
  {
    path: '',
    component: PeopleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleDetailsPageRoutingModule {}
