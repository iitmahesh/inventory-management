import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSuppliersPage } from './add-suppliers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AddSuppliersPage],
  entryComponents: [AddSuppliersPage]
})
export class AddSuppliersPageModule {}
