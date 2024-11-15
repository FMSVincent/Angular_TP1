import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer: Customer | undefined;

  constructor(public customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomer();
  }

  onSaveCustomer(f: NgForm) {
    this.customerService.saveCustomer(f.value);
  }
}
