import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFoodListsComponent } from './best-food-lists.component';

describe('BestFoodListsComponent', () => {
  let component: BestFoodListsComponent;
  let fixture: ComponentFixture<BestFoodListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestFoodListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestFoodListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
