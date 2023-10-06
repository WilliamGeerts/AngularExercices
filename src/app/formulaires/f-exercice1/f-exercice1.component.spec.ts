import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FExercice1Component } from './f-exercice1.component';

describe('FExercice1Component', () => {
  let component: FExercice1Component;
  let fixture: ComponentFixture<FExercice1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FExercice1Component]
    });
    fixture = TestBed.createComponent(FExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
