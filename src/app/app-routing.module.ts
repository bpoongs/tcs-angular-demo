import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CounterComponent } from './counter/counter.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ErrorComponent } from './error/error.component';
import { HelloComponent } from './hello/hello.component';
import { ListProductCardComponent } from './list-product-card/list-product-card.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ReactiveUserRegistrationComponent } from './reactive-user-registration/reactive-user-registration.component';
import { TemplateUserRegistrationComponent } from './template-user-registration/template-user-registration.component';

const routes: Routes = [
  {
    path: "hello",
    component: HelloComponent
  },
  {
    path: "counter",
    component: CounterComponent
  },
  {
    path: "list-product",
    component: ListProductComponent
  },
  {
    path: "list-product-card",
    component: ListProductCardComponent
  },
  {
    path: "add-product",
    component: AddProductComponent
  },
  {
    path: "",
    redirectTo: "hello",
    pathMatch: "full"
  },
  {
    path: "edit-product/:prodId",
    component: EditProductComponent
  },
  {
    path: "template-user",
    component: TemplateUserRegistrationComponent
  },
  {
    path: "reactive-user",
    component: ReactiveUserRegistrationComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
