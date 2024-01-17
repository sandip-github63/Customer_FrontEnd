import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endPoint from 'helper';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  public saveCustomer(user: any) {
    return this.http.post(`${endPoint}/api/customers`, user);
  }

  public getAllCustomers() {
    return this.http.get(`${endPoint}/api/customers`);
  }

  public deleteCustomer(customerId: any) {
    return this.http.delete(`${endPoint}/api/customers/${customerId}`);
  }

  public getCustomer(customerId: any) {
    return this.http.get(`${endPoint}/api/customers/${customerId}`);
  }
}
