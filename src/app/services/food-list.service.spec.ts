import { TestBed } from '@angular/core/testing';

import { FoodListService } from './food-list.service';

describe('FoodListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodListService = TestBed.get(FoodListService);
    expect(service).toBeTruthy();
  });
});
