import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomersPageRoutingModule } from './customers-routing.module';
import { CustomersPage } from './customers.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IndiancurrencyModule } from '../general/indiancurrency/indiancurrency.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule,
    NgxDatatableModule,
    IndiancurrencyModule
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
