import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FExercice3Component } from './f-exercice3.component';

describe('FExercice3Component', () => {
  let component: FExercice3Component;
  let fixture: ComponentFixture<FExercice3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FExercice3Component]
    });
    fixture = TestBed.createComponent(FExercice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
