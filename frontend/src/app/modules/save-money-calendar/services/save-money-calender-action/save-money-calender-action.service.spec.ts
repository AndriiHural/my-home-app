import { TestBed } from '@angular/core/testing';

import { SaveMoneyCalenderActionService } from './save-money-calender-action.service';

describe('SaveMoneyCalenderActionService', () => {
  let service: SaveMoneyCalenderActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveMoneyCalenderActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
