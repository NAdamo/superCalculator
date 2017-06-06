import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CalculatorHistory} from '../calculator-history';
import {OperatorsArray} from '../operators.enum';

@Component({
  selector: 'sc-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.css']
})
export class CalculatorHistoryComponent implements OnInit, OnChanges {
  @Input()
  calcHistory: CalculatorHistory[];
  operators = OperatorsArray;

  constructor() {
    this.calcHistory = [];
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }
}
