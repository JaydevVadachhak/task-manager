import { TestBed } from '@angular/core/testing';

import { TaskResolver } from './task.resolver';

describe('TaskResolver', () => {
  let resolver: TaskResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TaskResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
