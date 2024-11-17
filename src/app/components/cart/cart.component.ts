import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/interfaces/training.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  listCarts: Training[] | undefined;
  totalPrice: number | undefined;

  constructor(private carteServices: CartService, private router: Router) {}

  ngOnInit(): void {
    this.listCarts = this.carteServices.getTrainingCart();
    this.getTotalPrice();
  }

  getCart() {
    this.listCarts = this.carteServices.getTrainingCart();
    return this.listCarts && this.listCarts.length > 0 ? false : true;
  }

  deleteCart() {
    this.carteServices.deleteCart();
    this.getCart();
    this.getTotalPrice();
  }

  deleteItemFromCart(training: Training) {
    this.carteServices.deleteItemFromCart(training);
    this.getCart();
    this.getTotalPrice();
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
    this.router.navigate(['/customer']);
  }
}
