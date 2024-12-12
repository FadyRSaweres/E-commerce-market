import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayout } from './mainlayout/main.component';
import { Navbar } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  LucideAngularModule,
  File,
  Home,
  Menu,
  UserCheck,
  ShoppingCart,
} from 'lucide-angular';
import { CardPriceComponent } from './components/card-price/card-price.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayout,
    Navbar,
    FooterComponent,
    CardPriceComponent,
    RatingStarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LucideAngularModule.pick({ File, Home, Menu, UserCheck, ShoppingCart }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
