import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AddCustomersPage } from './add-customers.page';
import { AddNewCustomersComponent } from './add-new-customers/add-new-customers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AddCustomersPage, AddNewCustomersComponent],
  entryComponents: [AddCustomersPage, AddNewCustomersComponent]
})
export class AddCustomersPageModule {}
