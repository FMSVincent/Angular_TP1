import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { Training } from '../interfaces/training.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listCarts: Training[] = [];
  localStorageCartKey: string = 'cart';

  constructor(private _toastService: ToastService) {}

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
    this._toastService.info(`${training.name} à bien été ajouté`);
  }

  getTrainingCart(): Training[] {
    try {
      const storage: string = localStorage.getItem(this.localStorageCartKey);
      return storage ? JSON.parse(storage) : [];
    } catch (error) {
      return [];
    }
  }

  deleteItemFromCart(training: Training): void {
    const trainingsCart = this.getTrainingCart();
    const newCart = trainingsCart?.filter((item) => {
      return item.id !== training.id;
    });
    localStorage.setItem(this.localStorageCartKey, JSON.stringify(newCart));
    this._toastService.warn(`${training.name} à bien été supprimé`);
  }

  deleteCart() {
    localStorage.removeItem(this.localStorageCartKey);
  }
}
