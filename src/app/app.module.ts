import { PostService } from './services/post.service';
import { FormsModule } from '@angular/forms';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeroBirthday2Component } from './hero-birthday2/hero-birthday2.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SizerComponent } from './sizer/sizer.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeroBirthday2Component,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    ItemListComponent,
    ItemDetailComponent,
    SizerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
