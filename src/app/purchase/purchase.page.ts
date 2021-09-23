import { PurchaseDetailsPage } from './purchase-details/purchase-details.page';
import { AddPurchasePage } from './add-purchase/add-purchase.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {

  addPurchase = AddPurchasePage;
  purchaseDetails = PurchaseDetailsPage;
  constructor() { }

  ngOnInit() {
  }
}
