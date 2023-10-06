import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FExercice2Component } from './f-exercice2.component';

describe('FExercice2Component', () => {
  let component: FExercice2Component;
  let fixture: ComponentFixture<FExercice2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FExercice2Component]
    });
    fixture = TestBed.createComponent(FExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
