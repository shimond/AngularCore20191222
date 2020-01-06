import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KefelResultComponent } from './kefel-result.component';

describe('KefelResultComponent', () => {
  let component: KefelResultComponent;
  let fixture: ComponentFixture<KefelResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefelResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KefelResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
