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
  listCarts: Training[] = [];
  totalPrice: number | undefined;

  constructor(private carteServices: CartService, private router: Router) {}

  ngOnInit(): void {
    this.listCarts = this.carteServices.getTrainingCart();
    console.log(this.listCarts);

    this.getTotalPrice();
  }

  deleteCart() {
    this.carteServices.deleteCart();
    this.listCarts = this.carteServices.getTrainingCart();
    this.getTotalPrice();
  }

  deleteItemFromCart(training: Training) {
    this.carteServices.deleteItemFromCart(training);
    this.listCarts = this.carteServices.getTrainingCart();
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
