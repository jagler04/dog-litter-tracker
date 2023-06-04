import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogEditPageRoutingModule } from './dog-edit-routing.module';

import { DogEditPage } from './dog-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogEditPageRoutingModule
  ],
  declarations: [DogEditPage]
})
export class DogEditPageModule {}
