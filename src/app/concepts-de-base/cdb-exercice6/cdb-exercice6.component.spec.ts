import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice6Component } from './cdb-exercice6.component';

describe('CdbExercice6Component', () => {
  let component: CdbExercice6Component;
  let fixture: ComponentFixture<CdbExercice6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdbExercice6Component]
    });
    fixture = TestBed.createComponent(CdbExercice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
