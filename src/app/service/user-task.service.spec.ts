import { TestBed } from '@angular/core/testing';

import { UserTaskService } from './user-task.service';

describe('UserTaskService', () => {
  let service: UserTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
