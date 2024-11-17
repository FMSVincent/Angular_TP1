import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/interfaces/training.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.displayTrainings();
  }

  displayTrainings() {
    this.listTrainings = [
      {
        id: 1,
        name: 'Java',
        description: 'Formation Java SE sur 5 jours',
        price: 1500,
        quantity: 5,
      },
      {
        id: 2,
        name: 'DotNet',
        description: 'Formation Dotnet sur 3 jours',
        price: 1000,
        quantity: 5,
      },
      {
        id: 3,
        name: 'Python',
        description: 'Formation Python/Django',
        price: 5500,
        quantity: 5,
      },
    ];
  }

  onAddToCart(training: Training) {
    this.cartService.addTrainingToCart(training);
  }
}
