import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductCardComponent } from './list-product-card/list-product-card.component';
import { ColorDirective } from './directives/color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { ProductComponent } from './list-product/product/product.component';
import { ClimateComponent } from './climate/climate.component';
import { HttpClientModule } from '@angular/common/http';

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
    ClimateComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
