import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { CalculatorHistoryComponent } from './calculator-history/calculator-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorFormComponent,
    CalculatorResultComponent,
    CalculatorHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
