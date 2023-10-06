import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice42Component } from './cdb-exercice4.2.component';

describe('CdbExercice42Component', () => {
  let component: CdbExercice42Component;
  let fixture: ComponentFixture<CdbExercice42Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdbExercice42Component]
    });
    fixture = TestBed.createComponent(CdbExercice42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
