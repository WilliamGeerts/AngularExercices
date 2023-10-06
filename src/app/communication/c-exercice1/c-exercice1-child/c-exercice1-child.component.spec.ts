import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExercice1ChildComponent } from './c-exercice1-child.component';

describe('CExercice1ChildComponent', () => {
  let component: CExercice1ChildComponent;
  let fixture: ComponentFixture<CExercice1ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CExercice1ChildComponent]
    });
    fixture = TestBed.createComponent(CExercice1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
