import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DogInfoPage } from '../dog-info/dog-info.page';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomePage,
    // children: [
    //   {
    //     path: 'dog-info/:id',  // child route path
    //     title: "Dog Info",
    //     component: DogInfoPage,  // child route component that the router renders
    //   }
    //]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
