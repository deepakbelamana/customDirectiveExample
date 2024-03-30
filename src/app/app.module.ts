import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EvenNumberHighLighterDirective } from './even-number-high-lighter.directive';
import { OddNumberStylerDirective } from './odd-number-styler.directive';

@NgModule({
  declarations: [
    AppComponent,
    EvenNumberHighLighterDirective,
    OddNumberStylerDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
