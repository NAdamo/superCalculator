import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import {Operation} from '../operation';
import {Operators} from '../operators.enum';
import {CalculatorHistory} from '../calculator-history';

@Component({
  selector: 'sc-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.css']
})
export class CalculatorResultComponent implements OnInit, OnChanges {
  @Input()
  operation: Operation;
  times = 0;
  showResult: string | number;

  @Output()
  calcHistory = new EventEmitter<CalculatorHistory>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('OnChanges', this.operation, this.operation instanceof Operation);
    if (this.operation) {
      this.showResult = '';
      this.times = 5;
      this.delay(300);
    } else {
      this.showResult = 0;
    }
  }

  delay(time) {
    console.log('delay', this.times);
    if (this.times !== 0) {
      this.showResult += '.';
      console.log(this.showResult);
      this.times--;
      setTimeout(() => {
        this.delay(time);
      }, time);
    } else {
      this.showResult = this.calculate();
      if (typeof this.showResult === 'number') {
        const calcHistoryItem = new CalculatorHistory(this.operation, this.showResult);
        this.calcHistory.emit(calcHistoryItem);
      }
    }
  }

  calculate(): number | string {
    console.log('calculate begin: ', this.operation);
    let result = 0;
    if (this.operation) {
      if (typeof this.operation.firstOperand !== 'number' || typeof this.operation.secondOperand !== 'number') {
        return 'Missing operand';
      }
      switch (this.operation.operator) {
        case Operators.ADD:
          console.log('add');
          result = this.operation.firstOperand + this.operation.secondOperand;
          break;
        case Operators.SUBSTRACT:
          console.log('substract');
          result = this.operation.firstOperand - this.operation.secondOperand;
          break;
        case Operators.MULTIPLE:
          console.log('multiple');
          result = this.operation.firstOperand * this.operation.secondOperand;
          break;
        case Operators.DIVIDE:
          console.log('divide');
          result = this.operation.firstOperand / this.operation.secondOperand;
          break;
        case Operators.MODULO:
          console.log('modulo');
          result = this.operation.firstOperand % this.operation.secondOperand;
          break;
        default:
          return 'Something went wrong';
      }
    }
    return result;
  }

}
