import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice5Component } from './cdb-exercice5.component';

describe('CdbExercice5Component', () => {
  let component: CdbExercice5Component;
  let fixture: ComponentFixture<CdbExercice5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdbExercice5Component]
    });
    fixture = TestBed.createComponent(CdbExercice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
