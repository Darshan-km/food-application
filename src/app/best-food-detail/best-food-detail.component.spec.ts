import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFoodDetailComponent } from './best-food-detail.component';

describe('BestFoodDetailComponent', () => {
  let component: BestFoodDetailComponent;
  let fixture: ComponentFixture<BestFoodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestFoodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestFoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
