import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KefelBoardComponent } from './kefel-board.component';

describe('KefelBoardComponent', () => {
  let component: KefelBoardComponent;
  let fixture: ComponentFixture<KefelBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefelBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KefelBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
