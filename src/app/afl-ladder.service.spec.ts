import { TestBed } from '@angular/core/testing';

import { AflLadderService } from './afl-ladder.service';

describe('AflLadderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AflLadderService = TestBed.get(AflLadderService);
    expect(service).toBeTruthy();
  });
});
