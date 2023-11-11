import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderFormComponent } from './food-order-form.component';

describe('FoodOrderFormComponent', () => {
  let component: FoodOrderFormComponent;
  let fixture: ComponentFixture<FoodOrderFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodOrderFormComponent]
    });
    fixture = TestBed.createComponent(FoodOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
