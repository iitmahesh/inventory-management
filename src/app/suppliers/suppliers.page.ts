import { SuppliersService } from './suppliers.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {

  dataToBeShown = [];
  loadingIndicator = true;
  temp = [];
  selected = [];

  @ViewChild('table') table;
  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
    this.suppliersService.getSuppliersDetails().subscribe(
      supplierDetailsArray => {
       this.dataToBeShown = supplierDetailsArray.map(
           supplierDetails => {
               const supplierData: any  = supplierDetails.payload.doc.data();
               console.log(supplierData);
               return {
                 id : supplierDetails.payload.doc.id,
                  ...supplierData
               };
           }
        );
       this.temp = this.dataToBeShown;
       this.loadingIndicator = false;
      }
   );
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    console.log(val);

    // filter our data
    const temp = this.temp.filter((d) => {
      console.log(d);
      return d.productDesc.toLowerCase().indexOf(val) !== -1 || d.productCode.toLowerCase().indexOf(val) !== -1  || !val;
    });

    // update the rows
    this.dataToBeShown = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  update() {
    this.selected = [this.dataToBeShown[1], this.dataToBeShown[3]];
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
}
