import { TestBed } from '@angular/core/testing';

import { PhotoResolver } from './photo.resolver';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Photo } from '../models/photo';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

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
  let route: ActivatedRoute;
  let store: MockStore<{
    images: Photo[];
    selectedPhoto: Photo | undefined;
  }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: 'dhl' }) } },
        },
      ],
    });
    resolver = TestBed.inject(PhotoResolver);
    store = TestBed.inject(MockStore);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should dispatch action ', () => {
    const storeSpy = spyOn(resolver.store, 'dispatch').and.callThrough();
    resolver.resolve(route.snapshot);
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
