import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: any = {}; // Object to store form data

  constructor(private _customer: CustomerService) {}

  ngOnInit(): void {}

  submitForm() {
    this._customer.saveCustomer(this.customer).subscribe(
      (data: any) => {
        alert('Customer Added Successfully');
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
