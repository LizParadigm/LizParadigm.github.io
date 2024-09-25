import { TestBed } from '@angular/core/testing';

import { JojoImgService } from './jojo-img.service';

describe('JojoImgService', () => {
  let service: JojoImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JojoImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
