import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SExercice1Component } from './s-exercice1.component';

describe('SExercice1Component', () => {
  let component: SExercice1Component;
  let fixture: ComponentFixture<SExercice1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SExercice1Component]
    });
    fixture = TestBed.createComponent(SExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
