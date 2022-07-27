import { TestBed } from '@angular/core/testing';

import { PhotoResolver } from './photo.resolver';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Photo } from '../models/photo';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MemoizedSelector } from '@ngrx/store';
import { selectSelectedFavoritesPhotosAll } from '../../store/selectors/favorites.selector';
import { FavoritesState } from '../../store/reducers/favorites.reducer';

const initialState = {
  images: [
    {
      breeds: [],
      id: 'Q_iJiVROn',
      url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
      width: 3024,
      height: 3780,
    },
    {
      breeds: [],
      height: 600,
      id: 'dhl',
      url: 'https://cdn2.thecatapi.com/images/dhl.jpg',
      width: 800,
    },
  ],
  selectedPhoto: {
    breeds: [],
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
  let mockPhotoSelector: MemoizedSelector<FavoritesState, Photo>;

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

  it('should return photo', () => {
    mockPhotoSelector = store.overrideSelector(selectSelectedFavoritesPhotosAll, initialState.images[1]);
    store.refreshState();
    const resolved = resolver.resolve(route.snapshot);
    resolved.subscribe(val => {
      expect(val).toEqual(initialState.images[1]);
    });
  });
});
