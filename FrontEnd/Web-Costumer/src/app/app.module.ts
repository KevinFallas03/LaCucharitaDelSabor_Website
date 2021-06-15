import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './Components/header/header.component';
import { BannerComponent } from './Components/banner/banner.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { FormsModule } from '@angular/forms';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { MenuComponent } from './Components/menu/menu.component';

//Services
import { CartService } from './Services/cart-service.service';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SubscriptionComponent,
    DeliveryComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent,
    ShoppingCartComponent,
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
