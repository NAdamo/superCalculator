import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Operators, OperatorsArray} from '../operators.enum';
import {Operation} from '../operation';

@Component({
  selector: 'sc-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {
  operators = OperatorsArray;
  operation: Operation;
  @Output()
  operationEvent = new EventEmitter<Operation>();

  constructor() {
    this.operation = new Operation();
    this.operation.operator = Operators.ADD;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit', this.operation);
    this.operationEvent.emit(this.operation);
  }

}
