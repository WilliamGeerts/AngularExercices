import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExercice1Component } from './c-exercice1.component';

describe('CExercice1Component', () => {
  let component: CExercice1Component;
  let fixture: ComponentFixture<CExercice1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CExercice1Component]
    });
    fixture = TestBed.createComponent(CExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
