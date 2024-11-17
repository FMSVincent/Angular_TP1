import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer.interface';
import { Training } from 'src/app/interfaces/training.interface';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  listCarts: Training[] | undefined;
  totalPrice: number | undefined;
  customer: Customer = {
    name: '',
    lastname: '',
    address: '',
    phone: '',
    email: '',
  };

  constructor(
    private carteServices: CartService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.listCarts = this.carteServices.getTrainingCart();
    this.getTotalPrice();
    this.customer = this.customerService.getCustomer();
  }

  getCart() {
    this.listCarts = this.carteServices.getTrainingCart();
    return this.listCarts && this.listCarts.length > 0 ? false : true;
  }

  getTotalPrice() {
    let totalPriceItem = this.listCarts?.map((item) => {
      return item.quantity * item.price;
    });

    let initialValue = 0;
    this.totalPrice = totalPriceItem?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  }

  order() {
    alert(`Ajourd'hui cest gratuit ! Bon Week-end !`);
  }
}
