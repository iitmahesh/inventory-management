import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SalesDetailsPage } from './sales-details.page';
import { IndiancurrencyModule } from 'src/app/general/indiancurrency/indiancurrency.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    IndiancurrencyModule
  ],
  declarations: [SalesDetailsPage],
  entryComponents: [SalesDetailsPage]
})
export class SalesDetailsPageModule {}
