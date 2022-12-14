import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BienvenidaPage } from './bienvenida.page';

import { BienvenidaPageRoutingModule } from './bienvenida-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BienvenidaPage]
})
export class BienvenidaPageModule {}
