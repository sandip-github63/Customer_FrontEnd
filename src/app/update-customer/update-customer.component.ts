import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  customerId: any;
  customer: any = {};
  constructor(
    private _route: ActivatedRoute,
    private _customer: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerId = this._route.snapshot.params.customerId;

    this._customer.getCustomer(this.customerId).subscribe(
      (data: any) => {
        this.customer = data;
      },
      (error: any) => {
        alert('No such Customer found');
      }
    );
  }

  submitForm() {
    this._customer.saveCustomer(this.customer).subscribe(
      (data: any) => {
        alert('Customer Updated Successfully');
        this.customer.firstName = '';
        this.customer.lastName = '';
        this.customer.city = '';
        this.customer.email = '';
        this.customer.phone = '';
        this.customer.state = '';
        this.customer.street = '';
        this.customer.address = '';
      },
      (error: any) => {
        alert('Something went wrong');
      }
    );
  }
}
