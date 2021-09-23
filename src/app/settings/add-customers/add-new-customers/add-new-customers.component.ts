import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-add-new-customers',
  templateUrl: './add-new-customers.component.html',
  styleUrls: ['./add-new-customers.component.scss'],
})
export class AddNewCustomersComponent implements OnInit {

  constructor(private settingService: SettingsService,
              private loadingCtrl: LoadingController,
              private toastController: ToastController,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  addCustomer(form: NgForm){
    console.log(form.value);
    this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Adding Customer Please Wait....',
      cssClass: 'loading-class',
    }).then(
      (loadingEle) => {
        loadingEle.present();
        this.settingService.addCustomer(form.value).then(
          response => {
            console.log('Added Successfully Customer Data');
            console.log('I will show toast msg now now');
            this.toastController.create(
              {
                header: 'Sucessfull',
                message: 'Add Customer Sucessfull.',
                buttons: ['Ok'],
                duration: 2000,
                position: 'middle',
                animated: true
              }
            ).then(
              (toastEle) => {
                toastEle.present();
              }
            );
            form.reset();
            form.resetForm();
            loadingEle.dismiss();
          }
        ).catch(
          error => {
            console.log('Error while adding Customer Data .', error);
            this.toastController.create(
              {
                header: 'Failed',
                message: 'Error While Submitting Customer Data',
                buttons: ['Ok'],
                duration: 2000,
                position: 'middle',
                animated: true
              }
            ).then(
              (toastEle) => {
                toastEle.present();
              }
            );
            form.reset();
            form.resetForm();
            loadingEle.dismiss();
          }
        );
      }
    );
  }

  resetFormData(form: NgForm): void{
    console.log(form.value);
    form.reset();
    form.resetForm();
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
