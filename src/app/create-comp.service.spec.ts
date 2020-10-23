import { TestBed } from '@angular/core/testing';

import { CreateCompService } from './create-comp.service';

describe('CreateCompService', () => {
  let service: CreateCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
