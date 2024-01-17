import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css'],
})
export class ViewCustomersComponent implements OnInit {
  customers: any[] = []; // Array to store customer data
  filteredCustomers: any[] = [];
  selectedSearchOption: string = 'firstName';
  searchText: string = '';
  private searchSubject = new Subject<string>();

  constructor(private _customer: CustomerService) {}

  ngOnInit(): void {
    this._customer.getAllCustomers().subscribe(
      (data: any) => {
        this.customers = data;
        this.filteredCustomers = data;
      },
      (error: any) => {
        alert('something went wrong');
      }
    );

    // Debounce the search input
    this.searchSubject
      .pipe(debounceTime(300))
      .subscribe(() => this.searchCustomers());
  }

  public deleteCustomer(customerId: any) {
    this._customer.deleteCustomer(customerId).subscribe(
      (data) => {
        alert('Customer Deleted ');
        this.customers = this.customers.filter(
          (customer) => customer.customerId !== customerId
        );
        this.filteredCustomers = this.filteredCustomers.filter(
          (customer) => customer.customerId !== customerId
        );
      },
      (error) => {
        alert('somethig went wrong');
      }
    );
  }

  searchCustomers() {
    if (this.searchText.trim() === '') {
      this.filteredCustomers = this.customers;
    } else {
      this.filteredCustomers = this.customers.filter((customer) =>
        this.matchSearchText(
          customer[this.selectedSearchOption],
          this.searchText
        )
      );
    }
  }

  onSearchInput() {
    // Notify the searchSubject when the search input changes
    this.searchSubject.next();
  }

  matchSearchText(value: string, searchText: string): boolean {
    return value.toLowerCase().includes(searchText.toLowerCase());
  }
}
