import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  localStorageCustomerKey: string = 'customer';
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
    const customerStringify = JSON.stringify(customer);
    localStorage.setItem(this.localStorageCustomerKey, customerStringify);
    this.customer = customer;
  }

  getCustomerStorage(): Customer {
    try {
      const storage: string = localStorage.getItem(
        this.localStorageCustomerKey
      );
      return storage ? JSON.parse(storage) : this.customer;
    } catch (error) {
      return this.customer;
    }
  }

  deleteStorageCustomer() {
    localStorage.removeItem(this.localStorageCustomerKey);
  }
}
