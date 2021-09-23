import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private afStore: AngularFirestore) { }

  addCustomer(custData){
    console.log(custData);
    return this.afStore.collection('customers_table').add(custData);
  }

  addSupplier(supplierData){
    console.log(supplierData);
    return this.afStore.collection('suppliers_table').add(supplierData);
  }

  addProduct(productData){
    console.log(productData);
    return this.afStore.collection('products_table').add(productData);
  }

  getCustomers(){
    return this.afStore.collection('customers_table').valueChanges();
  }

  getSuppliers(){
    return this.afStore.collection('suppliers_table').valueChanges();
  }

  getProductsForCustOrSupp(custOrSupplier: string){
    return this.afStore.collection('products_table').ref.
        where('productFromTo', '==', custOrSupplier).get();
  }

}
