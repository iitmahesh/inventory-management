import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomersListService {

  constructor(private afStore: AngularFirestore) { }

  getCustomersDetails() {
    return this.afStore.collection('customers_table').snapshotChanges();
  }
}
