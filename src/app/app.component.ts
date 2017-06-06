import {Component} from '@angular/core';
import {Operation} from './operation';
import {CalculatorHistory} from './calculator-history';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Calculator';
  operation: Operation;
  calcHistory: CalculatorHistory[] = [];

  onOperation(operation: Operation) {
    console.log('AppComponent', operation);
    this.operation = Object.assign({}, operation);
  }

  onHistory(history: CalculatorHistory) {
    this.calcHistory.push(history);
  }
}
