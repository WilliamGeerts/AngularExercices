import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PExercice1Component } from './p-exercice1.component';

describe('PExercice1Component', () => {
  let component: PExercice1Component;
  let fixture: ComponentFixture<PExercice1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PExercice1Component]
    });
    fixture = TestBed.createComponent(PExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
