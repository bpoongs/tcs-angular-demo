import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductCardComponent } from './list-product-card/list-product-card.component';
import { ColorDirective } from './directives/color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { ProductComponent } from './list-product/product/product.component';
import { ClimateComponent } from './climate/climate.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { TemplateUserRegistrationComponent } from './template-user-registration/template-user-registration.component';
import { ReactiveUserRegistrationComponent } from './reactive-user-registration/reactive-user-registration.component';
import { TemplateInfoComponent } from './template-info/template-info.component';
import { ReactiveInfoComponent } from './reactive-info/reactive-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ListProductComponent,
    ListProductCardComponent,
    ColorDirective,
    SortPipe,
    ProductComponent,
    ClimateComponent,
    HeaderComponent,
    ErrorComponent,
    AddProductComponent,
    EditProductComponent,
    TemplateUserRegistrationComponent,
    ReactiveUserRegistrationComponent,
    TemplateInfoComponent,
    ReactiveInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
