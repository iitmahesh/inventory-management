import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { GeneralService } from 'src/app/general/general.service';
import { SettingsService } from 'src/app/settings/settings.service';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.page.html',
  styleUrls: ['./add-sales.page.scss'],
})
export class AddSalesPage implements OnInit {

  error;
  todaysDate;
  customers = [];
  productCodes = [];
  productDescriptions = [];
  productsForCustomers = [];
  productCode;
  productDesc;
  customer;
  rate;
  payment;
  totalAmount;
  ratePerQty;
  quantityType;

  constructor(private menu: MenuController,
              private generalService: GeneralService,
              private toastController: ToastController,
              private loadingCtrl: LoadingController,
              private settingService: SettingsService) { }

  ngOnInit() {
    this.todaysDate = new Date().toISOString();
    this.settingService.getCustomers().subscribe(
      (customersResp: any) => {
        console.log(customersResp);
        for (const customer of customersResp){
          this.customers.push(customer['customerName']);
        }
        console.log(this.customers);
      }
    );

    this.settingService.getProductsForCustOrSupp('customer').then(
      value => {
        console.log(value);
        value.forEach(
          val => {
            console.log(val);
            const docData = val.data();
            console.log(docData);
            this.productsForCustomers.push(docData);
          }
        );
      }
    ).catch(
      error => {
        console.log('error while getting products ', error);
      }
    );
  }

  openMainMenu(){
    this.menu.toggle('mainMenu');
  }

  formatAmountToCurrency(amount, form: NgForm): any{
    console.log(amount);
    if (amount !== null && amount !== undefined){
      if (amount.toString().charAt(0) === '₹'){
        const valueStr = amount.toString();
        console.log(valueStr.length);
        amount = valueStr.substr(1, valueStr.length - 1 ).replace(/,/g, '');
      }
      amount = +amount;
      this.rate = '₹' + (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      console.log(this.rate);
    }
    else{
      this.rate = '₹' + 0;
    }
    this.calculateAmount(form);

  }

  formatToCurrency(amount): string{
    console.log(amount);
    if (amount !== null && amount !== undefined){
      if (amount.toString().charAt(0) === '₹'){
        const valueStr = amount.toString();
        console.log(valueStr.length);
        amount = valueStr.substr(1, valueStr.length - 1 ).replace(/,/g, '');
      }
      amount = +amount;
      return '₹' + (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    else{
      return '₹' + 0;
    }
  }

  formatPaymentToCurrency(amount, form: NgForm): any{
    console.log(amount);
    if (amount !== null && amount !== undefined){
      if (amount.toString().charAt(0) === '₹'){
        const valueStr = amount.toString();
        console.log(valueStr.length);
        amount = valueStr.substr(1, valueStr.length - 1 ).replace(/,/g, '');
      }
      amount = +amount;
      this.payment = '₹' + (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      console.log(this.rate);
    }
    else{
      this.payment = '₹' + 0;
    }
  }

  calculateAmount(form: NgForm) {
    console.log(form.value);
    let cgst = 0;
    let sgst = 0;
    let discount = 0;
    let rate = 0;
    let qty = 0;

    if (!!form.value.quantity){
      qty = +form.value.quantity;
      console.log('qty  : ' , qty);
    }
    if (!!form.value.cgst){
      cgst = form.value.cgst;
      console.log('cgst  : ' , cgst);
    }
    if (!!form.value.sgst){
      sgst = form.value.sgst;
      console.log('sgst  : ' , sgst);
    }
    if (!!form.value.discount){
      discount = form.value.discount;
      console.log('discount  : ' , discount);
    }
    if (!!form.value.rate){
      rate = this.convertRateToNumber(form.value.rate);
      console.log('rate  : ' , rate);
    }
    const newRate = (rate * qty);
    const discountedRate = newRate - (newRate * discount / 100);
    this.totalAmount = this.formatToCurrency(discountedRate  + (discountedRate * cgst / 100) + (discountedRate * sgst / 100));

  }

  convertRateToNumber(value ): number {
    if (value !== undefined && value !== null) {
      console.log(value);
      if (value.toString().charAt(0) === '₹'){
        const valueStr = value.toString();
        console.log(valueStr.length);
        return +valueStr.substr(1, valueStr.length - 1 ).replace(/,/g, '');
      } else {
        return +value.toString().replace(/,/g, '');
      }
    } else {
      return 0;
    }
  }

  resetFormData(form: NgForm): void{
    form.reset();
    form.resetForm();
    this.productCodes = [];
    this.productDescriptions = [];
    this.quantityType = '';
  }

  submitSales(form: NgForm) {
    console.log(form.value);
    const rateVal = this.convertRateToNumber(this.rate);
    const amountVal = this.convertRateToNumber(this.totalAmount);
    const paymentVal = this.convertRateToNumber(this.payment);
    form.value.rate = rateVal;
    form.value.totalAmount = amountVal;
    form.value.payment = paymentVal;
    form.value.qtyWithQtyType = form.value.quantity + this.quantityType;
    form.value.quantity = +form.value.quantity;
    console.log(form.value);
    this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Adding Sales to Inventory Please Wait....',
      cssClass: 'loading-class',
    }).then(
      loadingele => {
        loadingele.present();
        this.generalService.submitSalesData(form.value)
        .then(
          response => {
            console.log('Added Successfully Purchase Data');
            console.log('I will show Dialog now');
            this.toastController.create(
              {
                header: 'Sucessfull',
                message: 'Add new Sales to inventory is Sucessfull.',
                buttons: ['Ok'],
                duration: 500,
                position: 'middle'
              }
            ).then(
              (toastEle) => {
                toastEle.present();
              }
            );
            form.reset();
            form.resetForm();
            this.productCodes = [];
            this.productDescriptions = [];
            this.quantityType = '';
            loadingele.dismiss();
          })
          .catch(
            error => {
                console.log('Error while adding Sales Data .', error);
                this.toastController.create(
                  {
                    header: 'Failed',
                    message: 'Error While Submitting Sales Data',
                    buttons: ['Ok'],
                    duration: 500,
                    position: 'middle'
                  }
                ).then(
                  (toastEle) => {
                    toastEle.present();
                  }
                );
                form.reset();
                form.resetForm();
                this.productCodes = [];
                this.productDescriptions = [];
                this.quantityType = '';
                loadingele.dismiss();
            }
          );
      }
    );
  }

  checkProductForCustomer(customer){
    console.log('Inside checkProductForCustomer', customer);
    this.productsForCustomers.forEach(
      value => {
        if(value['productSupplier'] === customer){
          console.log('Inside checkProductForCustomer if cond  : ', value);
          this.productDescriptions.push(value['productDesc']);
        }
      }
    );
  }

  /*checkProductForProductCd(productCd){
    console.log('Inside checkProductForProductCd', productCd);
    this.productDescriptions = [];
    this.productDesc = '';
    this.productsForSuppliers.forEach(
      value => {
        if (value['productCode'] === productCd) {
          console.log('Inside checkProductForProductCd if cond  : ', value);
          this.productDescriptions.push(value['productDesc']);
        }
      }
    );
  }*/

  checkProductForProductDesc(productdes, form: NgForm){
    console.log('Inside checkProductForProductCd', productdes);
    this.productCodes = [];
    this.productCode = '';
    this.productsForCustomers.forEach(
      value => {
        if (value['productDesc'] === productdes) {
          console.log('Inside checkProductForProductDesc if cond  : ', value);
          this.productCodes.push(value['productCode']);
          this.ratePerQty = value['ratePerQty'];
          this.quantityType = value['qtyType'];
          this.rate = this.formatToCurrency(this.ratePerQty);
          this.calculateAmount(form);
        }
      }
    );
  }

}
