import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuppliersPageRoutingModule } from './suppliers-routing.module';

import { SuppliersPage } from './suppliers.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IndiancurrencyModule } from '../general/indiancurrency/indiancurrency.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppliersPageRoutingModule,
    NgxDatatableModule,
    IndiancurrencyModule
  ],
  declarations: [SuppliersPage]
})
export class SuppliersPageModule {}
