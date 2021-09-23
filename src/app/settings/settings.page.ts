import { AddProductsPage } from './add-products/add-products.page';
import { AddSuppliersPage } from './add-suppliers/add-suppliers.page';
import { AddCustomersPage } from './add-customers/add-customers.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  addCustomers = AddCustomersPage;
  addSuppliers = AddSuppliersPage;
  addProducts = AddProductsPage;

  constructor() { }

  ngOnInit() {
  }
}
