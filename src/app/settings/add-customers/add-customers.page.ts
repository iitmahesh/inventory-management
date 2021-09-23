import { AddNewCustomersComponent } from './add-new-customers/add-new-customers.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CustomersListService } from './customers.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.page.html',
  styleUrls: ['./add-customers.page.scss'],
})
export class AddCustomersPage implements OnInit{

  error;
  customersList = [];
  temp = [];
  constructor(private modalCtrl: ModalController, private custService: CustomersListService) { }

  ngOnInit() {
      console.log('indise NgONINIT of add Customer');
      this.custService.getCustomersDetails().subscribe(
        customerDetailsArray => {
        this.customersList = customerDetailsArray.map(
            customersDetails => {
                const customerData: any  = customersDetails.payload.doc.data();
                console.log(customerData);
                return {
                  id : customersDetails.payload.doc.id,
                    ...customerData
                };
            }
          );
        console.log(this.customersList);
        this.temp = this.customersList;
        }
    );
  }

  addNewCustomer(){
    this.modalCtrl.create(
      {
        component: AddNewCustomersComponent,
        mode: 'ios',
        cssClass: 'my-custom-modal-css'
      }
    ).then(
      modalEle => {
        modalEle.present();
      }
    );
  }

}
