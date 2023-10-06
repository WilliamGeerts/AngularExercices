import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExercice3ChildComponent } from './c-exercice3-child.component';

describe('CExercice3ChildComponent', () => {
  let component: CExercice3ChildComponent;
  let fixture: ComponentFixture<CExercice3ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CExercice3ChildComponent]
    });
    fixture = TestBed.createComponent(CExercice3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
