import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice4Component } from './cdb-exercice4.component';

describe('CdbExercice4Component', () => {
  let component: CdbExercice4Component;
  let fixture: ComponentFixture<CdbExercice4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdbExercice4Component]
    });
    fixture = TestBed.createComponent(CdbExercice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
