import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableFromAdressComponent } from './variable-from-adress.component';

describe('VariableFromAdressComponent', () => {
  let component: VariableFromAdressComponent;
  let fixture: ComponentFixture<VariableFromAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariableFromAdressComponent]
    });
    fixture = TestBed.createComponent(VariableFromAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
