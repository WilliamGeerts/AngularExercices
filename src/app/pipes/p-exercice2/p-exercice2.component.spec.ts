import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PExercice2Component } from './p-exercice2.component';

describe('PExercice2Component', () => {
  let component: PExercice2Component;
  let fixture: ComponentFixture<PExercice2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PExercice2Component]
    });
    fixture = TestBed.createComponent(PExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
