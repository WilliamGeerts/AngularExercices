import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SExercice2Component } from './s-exercice2.component';

describe('SExercice2Component', () => {
  let component: SExercice2Component;
  let fixture: ComponentFixture<SExercice2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SExercice2Component]
    });
    fixture = TestBed.createComponent(SExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
