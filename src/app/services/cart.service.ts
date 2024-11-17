import { Injectable } from '@angular/core';
import { Training } from '../interfaces/training.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listCarts: Training[] = [];
  localStorageCartKey: string = 'cart';
  constructor() {}

  addTrainingToCart(training: Training): void {
    this.listCarts = this.getTrainingCart();

    if (this.listCarts.length > 0) {
      const isExistTrainingIndex = this.listCarts.findIndex(
        (i) => i.id === training.id
      );

      if (isExistTrainingIndex !== -1) {
        this.listCarts[isExistTrainingIndex].quantity += training.quantity;
      } else {
        this.listCarts.push(training);
      }
    } else {
      this.listCarts.push(training);
    }
    localStorage.setItem(
      this.localStorageCartKey,
      JSON.stringify(this.listCarts)
    );
  }

  getTrainingCart(): Training[] | [] {
    let storage = localStorage.getItem(this.localStorageCartKey);
    const cart = storage ? JSON.parse(storage) : [];
    return cart;
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
