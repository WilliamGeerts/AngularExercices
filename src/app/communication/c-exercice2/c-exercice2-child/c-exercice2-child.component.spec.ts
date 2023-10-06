import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExercice2ChildComponent } from './c-exercice2-child.component';

describe('CExercice2ChildComponent', () => {
  let component: CExercice2ChildComponent;
  let fixture: ComponentFixture<CExercice2ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CExercice2ChildComponent]
    });
    fixture = TestBed.createComponent(CExercice2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
