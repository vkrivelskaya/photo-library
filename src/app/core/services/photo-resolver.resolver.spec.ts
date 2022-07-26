import { TestBed } from '@angular/core/testing';

import { PhotoResolver } from './photo-resolver.resolver';

describe('PhotoResolverResolver', () => {
  let resolver: PhotoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhotoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
