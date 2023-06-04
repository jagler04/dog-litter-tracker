import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'message/:id',
  //   loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  // },
  {
    path: '',
    redirectTo: 'dogs',
    pathMatch: 'full'
  },
  {
    path: 'dogs',
    loadChildren: () => import('./pages/dogs/dogs.module').then( m => m.DogsPageModule)
  },
  {
    path: 'dog-info/:id',
    loadChildren: () => import('./pages/dog-info/dog-info.module').then( m => m.DogInfoPageModule)
  },
  {
    path: 'dog-edit/:id',
    loadChildren: () => import('./pages/dog-edit/dog-edit.module').then( m => m.DogEditPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
