import { TestBed } from '@angular/core/testing';

import { PhotoResolver } from './photo-resolver.resolver';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Photo } from '../models/photo';

const initialState = {
  images: [
    {
      id: 'Q_iJiVROn',
      url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
      width: 3024,
      height: 3780,
    },
    {
      height: 600,
      id: 'dhl',
      url: 'https://cdn2.thecatapi.com/images/dhl.jpg',
      width: 800,
    },
  ],
  selectedPhoto: {
    height: 600,
    id: 'dhl',
    url: 'https://cdn2.thecatapi.com/images/dhl.jpg',
    width: 800,
  },
};

describe('PhotoResolverResolver', () => {
  let resolver: PhotoResolver;
  let store: MockStore<{
    images: Photo[];
    selectedPhoto: Photo | undefined;
  }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    resolver = TestBed.inject(PhotoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
