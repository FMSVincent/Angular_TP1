import { Injectable } from '@angular/core';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listCarts: Training[] = [];
  localStorageCartKey: string = 'cart';
  constructor() {}

  addTrainingToCart(training: Training) {
    if (localStorage.getItem('cart')) {
      let localStorageCart = JSON.parse(localStorage.getItem('cart') || '""');
      localStorageCart.push(training);
      localStorage.setItem('cart', JSON.stringify(localStorageCart));
    } else {
      this.listCarts.push(training);
      localStorage.setItem('cart', JSON.stringify(this.listCarts));
    }
  }

  getTrainingCart(): Training[] | undefined {
    if (localStorage.getItem(this.localStorageCartKey)) {
      let localStorageCart = JSON.parse(
        localStorage.getItem(this.localStorageCartKey) || '""'
      );
      return localStorageCart;
    }
    return undefined;
  }

  deleteItemFromCart(training: Training) {
    const trainingsCart = this.getTrainingCart();
    const newCart = trainingsCart?.filter((item) => {
      return item.id !== training.id;
    });
    localStorage.setItem(this.localStorageCartKey, JSON.stringify(newCart));
  }

  deleteCart() {
    localStorage.clear();
  }
}
