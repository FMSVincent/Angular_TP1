import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from 'src/app/components/trainings/trainings.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
