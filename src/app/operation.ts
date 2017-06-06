import {Operators} from './operators.enum';
export class Operation {
  firstOperand: number;
  secondOperand: number;
  operator: Operators = Operators.ADD;
}
