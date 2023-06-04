import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogEditPage } from './dog-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DogEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogEditPageRoutingModule {}
