import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.page.html',
  styleUrls: ['./add-suppliers.page.scss'],
})
export class AddSuppliersPage implements OnInit {

  error;
  constructor(private settingService: SettingsService,
              private loadingCtrl: LoadingController,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  addSupplier(form: NgForm){
    console.log(form.value);
    this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Adding Supplier Please Wait....',
      cssClass: 'loading-class',
    }).then(
      (loadingEle) => {
        loadingEle.present();
        this.settingService.addSupplier(form.value).then(
          response => {
            console.log('Added Successfully Supplier Data');
            console.log('I will show toast msg now now');
            this.toastController.create(
              {
                header: 'Sucessfull',
                message: 'Add New Supplier is Sucessfull.',
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
            console.log('Error while adding Supplier Data .', error);
            this.toastController.create(
              {
                header: 'Failed',
                message: 'Error While Submitting Supplier Data',
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

  resetFormData(form: NgForm){
    console.log(form.value);
    form.reset();
    form.resetForm();
  }


}
