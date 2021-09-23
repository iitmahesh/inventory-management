import { AddSuppliersPageModule } from './add-suppliers/add-suppliers.module';
import { AddProductsPageModule } from './add-products/add-products.module';
import { AddCustomersPageModule } from './add-customers/add-customers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCustomersPageModule,
    AddProductsPageModule,
    AddSuppliersPageModule,
    SettingsPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
