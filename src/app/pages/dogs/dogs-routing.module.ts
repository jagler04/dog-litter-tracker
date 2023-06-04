import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogsPage } from './dogs.page';
import { DogInfoPage } from '../dog-info/dog-info.page';

const routes: Routes = [
  {
    path: '',
    title: "Dogs",
    component: DogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsPageRoutingModule {}
