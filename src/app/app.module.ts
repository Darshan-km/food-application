import { FoodListService } from './services/food-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestFoodListsComponent } from './best-food-lists/best-food-lists.component';
import { BestFoodDetailComponent } from './best-food-detail/best-food-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BestFoodListsComponent,
    BestFoodDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule

  ],
  providers: [FoodListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
