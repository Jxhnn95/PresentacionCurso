import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasComponent } from './problemas.component';

describe('ProblemasComponent', () => {
  let component: ProblemasComponent;
  let fixture: ComponentFixture<ProblemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemasComponent]
    });
    fixture = TestBed.createComponent(ProblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
