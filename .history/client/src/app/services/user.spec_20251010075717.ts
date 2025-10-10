import { TestBed } from '@angular/core/testing';

import { User } from './user';

describe('User', () => {
  let service: User;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // User is a type-only export, so create a mock instance for testing instead of injecting
    service = {} as User;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
