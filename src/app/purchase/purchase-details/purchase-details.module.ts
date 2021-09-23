import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseDetailsPage } from './purchase-details.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IndiancurrencyModule } from 'src/app/general/indiancurrency/indiancurrency.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    IndiancurrencyModule
  ],
  declarations: [PurchaseDetailsPage],
  entryComponents: [PurchaseDetailsPage]
})
export class PurchaseDetailsPageModule {}
