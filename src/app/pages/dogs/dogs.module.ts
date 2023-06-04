import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogsPageRoutingModule } from './dogs-routing.module';

import { DogsPage } from './dogs.page';
import { DogListItemComponent } from 'src/app/components/dog-list-item/dog-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogsPageRoutingModule
  ],
  declarations: [DogsPage, DogListItemComponent]
})
export class DogsPageModule {}
