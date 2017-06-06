import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {MockCalculatorFormComponent} from './calculator-form/calculator-form.component.spec';
import {MockCalculatorResultComponent} from './calculator-result/calculator-result.component.spec';
import {MockCalculatorHistoryComponent} from './calculator-history/calculator-history.component.spec';

describe('AppComponent', () => {
  const appTitle = 'Super Calculator';
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockCalculatorFormComponent,
        MockCalculatorResultComponent,
        MockCalculatorHistoryComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));
  describe('Unit Testing', () => {
    it('should create the app', async(() => {
      expect(app).toBeTruthy();
    }));

    it(`should have as title '${appTitle}!'`, async(() => {
      expect(app.title).toEqual(appTitle);
    }));
  });

  describe('Tempalte testing', () => {
    beforeEach(() => {
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });
    it('should render title in a h1 tag', () => {
      expect(compiled.querySelector('h1').textContent).toContain(appTitle);
    });

    it('should render the calculator form', () => {
      expect(compiled.querySelector('sc-calculator-form')).not.toBeNull();
    });

    it('should render the calculator result', () => {
      expect(compiled.querySelector('sc-calculator-result')).not.toBeNull();
    });

    it('should render the calculator history', () => {
      expect(compiled.querySelector('sc-calculator-history')).not.toBeNull();
    });
  });

});
