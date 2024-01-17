import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'update-customer/:customerId',
    component: UpdateCustomerComponent,
  },

  {
    path: 'add-customer',
    component: AddCustomerComponent,
  },
  {
    path: 'view-customer',
    component: ViewCustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
