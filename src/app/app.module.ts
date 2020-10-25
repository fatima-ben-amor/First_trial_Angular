import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
//import { MatSliderModule } from "@angular/material/slider";
import { MatDialogModule } from '@angular/material/dialog';

import "hammerjs";
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { from } from "rxjs";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AppComponent, MenuComponent, DishdetailComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule
    
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  entryComponents: [
    LoginComponent
],
  bootstrap: [AppComponent],
})
export class AppModule {}