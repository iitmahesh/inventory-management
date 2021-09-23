import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { PurchaseDetailsPageModule } from './purchase-details/purchase-details.module';
import { AddPurchasePageModule } from './add-purchase/add-purchase.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PurchasePageRoutingModule } from './purchase-routing.module';
import { PurchasePage } from './purchase.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasePageRoutingModule,
    AddPurchasePageModule,
    PurchaseDetailsPageModule,
    SuperTabsModule,
    AngularFirestoreModule
  ],
  declarations: [PurchasePage]
})
export class PurchasePageModule {}
