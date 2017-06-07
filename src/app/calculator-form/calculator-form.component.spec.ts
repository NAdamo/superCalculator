import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {CalculatorFormComponent} from './calculator-form.component';
import {By} from '@angular/platform-browser';
import {Operators} from '../operators.enum';
import {FormsModule} from '@angular/forms';
import {Operation} from '../operation';

@Component({
  selector: 'sc-calculator-form',
  template: `MockCalculatorFormComponent`
})
export class MockCalculatorFormComponent {
}

describe('CalculatorFormComponent', () => {
  let component: CalculatorFormComponent;
  let fixture: ComponentFixture<CalculatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorFormComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('Unit testing', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have an operation object', () => {
      expect(component.operation).toBeDefined();
    });

    it('should initialize operation.operator to +', () => {
      expect(component.operation.operator).toBe(Operators.ADD);
    });
  });
  describe('Template testing', () => {
    function getElementById(ref) {
      return fixture.debugElement.query(By.css('#' + ref));
    }

    function getElementsByCss(ref) {
      return fixture.debugElement.queryAll(By.css(ref));
    }

    it('should have contain two number inputs', () => {
      const de = getElementsByCss('input[type=number]');
      expect(de.length).toBe(2);
    });

    it('should have contain a select element', () => {
      const de = getElementsByCss('select');
      expect(de.length).toBe(1);
    });

    it('select element should have contain 5 options', () => {
      const de = getElementsByCss('select option');
      expect(de.length).toBe(5);
    });

    it('should have contain a form element', () => {
      const de = getElementsByCss('select');
      expect(de.length).toBe(1);
    });

    it('should have contain a calculate button', () => {
      const de = getElementsByCss('button');
      expect(de.length).toBe(1);
      expect(de[0].nativeElement.textContent).toContain('Calculate');
    });

    it('should fire an event when calculate button clicked', async(() => {
      let lastEvent: Operation = new Operation();
      component.operation = {
        firstOperand: 12,
        secondOperand: 3,
        operator: Operators.MULTIPLE
      };
      fixture.detectChanges();
      component.operationEvent.subscribe(event => lastEvent = event);
      const de = fixture.debugElement.query(By.css('form'));
      de.triggerEventHandler('submit', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(lastEvent.firstOperand).toBe(12);
        expect(lastEvent.secondOperand).toBe(3);
        expect(lastEvent.operator).toBe(Operators.MULTIPLE);
      });
    }));
  });

});
