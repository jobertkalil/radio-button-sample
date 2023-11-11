import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodOrderFormComponent } from './food-order-form/food-order-form.component';

const routes: Routes = [
  { path: '', component: FoodOrderFormComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
