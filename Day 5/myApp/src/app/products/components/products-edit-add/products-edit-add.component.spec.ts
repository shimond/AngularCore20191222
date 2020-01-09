import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditAddComponent } from './products-edit-add.component';

describe('ProductsEditAddComponent', () => {
  let component: ProductsEditAddComponent;
  let fixture: ComponentFixture<ProductsEditAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsEditAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
