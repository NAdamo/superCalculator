import {Operation} from './operation';
export class CalculatorHistory {
  constructor(private operation: Operation,
              private result: number,
              private date = new Date()) {
  }
}
