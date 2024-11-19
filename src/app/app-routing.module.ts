import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent }, // Cette route affiche le composant TrainingsComponent quand l'URL est '/trainings'.
  { path: 'cart', component: CartComponent }, // Affiche le composant CartComponent lorsque l'URL est '/cart'.
  { path: 'order', component: OrderComponent }, // Affiche le composant OrderComponent lorsque l'URL est '/order'.
  { path: 'customer', component: CustomerComponent }, // Affiche le composant CustomerComponent lorsque l'URL est '/customer'.
  { path: '', redirectTo: 'trainings', pathMatch: 'full' }, // Si l'URL est vide ('/'), redirige vers '/trainings'.
  { path: '404', component: NotFoundComponent }, // Cette route affiche le composant NotFoundComponent pour '/404'.
  { path: '**', redirectTo: '/404' } // Cette route gère toutes les URL non définies et les redirige vers '/404'.
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
