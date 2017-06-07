import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {CalculatorResultComponent} from './calculator-result.component';
import {Operators} from '../operators.enum';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CalculatorHistory} from '../calculator-history';

@Component({
  selector: 'sc-calculator-result',
  template: `MockCalculatorResultComponent`
})
export class MockCalculatorResultComponent {
  @Input()
  operation;
  @Output()
  calcHistory = new EventEmitter<CalculatorHistory>();

  calculate() {
  }

  delay() {
  }
}

describe('CalculatorResultComponent', () => {
  let component: CalculatorResultComponent;
  let fixture: ComponentFixture<CalculatorResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Unit testing', () => {
    describe('calculate', () => {
      it('should add two operand', () => {
        component.operation = {
          firstOperand: 20,
          secondOperand: 22,
          operator: Operators.ADD
        };
        expect(component.calculate()).toBe(42);
      });
      it('should substract two operand', () => {
        component.operation = {
          firstOperand: 64,
          secondOperand: 22,
          operator: Operators.SUBSTRACT
        };
        expect(component.calculate()).toBe(42);
      });
      it('should multiple two operand', () => {
        component.operation = {
          firstOperand: 14,
          secondOperand: 3,
          operator: Operators.MULTIPLE
        };
        expect(component.calculate()).toBe(42);
      });
      it('should divide two operand', () => {
        component.operation = {
          firstOperand: 84,
          secondOperand: 2,
          operator: Operators.DIVIDE
        };
        expect(component.calculate()).toBe(42);
      });
      it('should modulo two operand', () => {
        component.operation = {
          firstOperand: 85,
          secondOperand: 43,
          operator: Operators.MODULO
        };
        expect(component.calculate()).toBe(42);
      });
    });
    it('should delay the calculation', fakeAsync(() => {
      component.showResult = '';
      component.times = 3;
      component.operation = {
        firstOperand: 3,
        secondOperand: 14,
        operator: Operators.MULTIPLE
      };

      component.delay(500);

      expect(component.showResult).toEqual('.');
      tick(500);
      expect(component.showResult).toEqual('..');
      tick(1000);
      expect(component.showResult).toEqual(42);
    }));
  });
});
