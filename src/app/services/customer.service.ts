import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customer: Customer = {
    name: '',
    lastname: '',
    address: '',
    phone: '',
    email: '',
  };

  constructor() {}

  getCustomer(): Customer {
    return this.customer;
  }

  saveCustomer(customer: Customer) {
    this.customer = customer;
  }
}
