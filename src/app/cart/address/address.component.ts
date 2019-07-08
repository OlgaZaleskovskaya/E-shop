import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/Model/address.model';
import { GoodsService } from 'src/app/Services/goods.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  address1: string;
  address2: string;
  address: AddressModel;
  shippingRegion: string;
  country: string;
  countries: Object[];
  shippingOptions: string[];
  shippingRegions: string[];

  selectedShippingRegion: number;
  constructor(private goodsService: GoodsService, private router: Router) { }

  ngOnInit() {
    this.address1 = '';
    this.address = new AddressModel("", "", "", "", "", "", "");
    this.shippingRegions = [''];
    this.goodsService.getCountries()
      .subscribe(response => {
        this.countries = <Array<Object>>response;
      });

    this.goodsService.getShippingOptions()
      .subscribe(response => {
        this.shippingOptions = <Array<string>>response
      });
  };


  onChange(value) {
    this.shippingRegions = this.countries[value]['region'];
  }

  onSubmit(form: NgForm) {
   console.log(this.address);
    form.resetForm();
    this.router.navigate(["/"]);

  }

  onCleanForm(form: NgForm) {
    form.resetForm();
  }



}
