import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSalesOrderPage } from './add-sales-order.page';
import { IndiancurrencyModule } from 'src/app/general/indiancurrency/indiancurrency.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IndiancurrencyModule
  ],
  declarations: [AddSalesOrderPage]
})
export class AddSalesOrderPageModule {}
