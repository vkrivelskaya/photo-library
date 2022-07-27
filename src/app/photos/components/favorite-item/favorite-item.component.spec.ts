import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemComponent } from './favorite-item.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Photo } from '../../../core/models/photo';
import { By } from '@angular/platform-browser';

let routerSpy = { navigate: jasmine.createSpy('navigate') };
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

describe('FavoriteItemComponent', () => {
  let component: FavoriteItemComponent;
  let fixture: ComponentFixture<FavoriteItemComponent>;
  let store: MockStore<{
    images: Photo[];
    selectedPhoto: Photo | undefined;
  }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteItemComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: [
                {
                  id: 'Q_iJiVROn',
                  url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
                  width: 3024,
                  height: 3780,
                },
              ],
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteItemComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onRemoveButtonClick on button click event', () => {
    spyOn(component, 'onRemoveButtonClick');
    const container = fixture.debugElement.query(By.css('.remove-button'));
    container.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.onRemoveButtonClick).toHaveBeenCalled();
  });

  it(`should navigate to favorites after remove item`, () => {
    component.onRemoveButtonClick();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['favorites']);
  });

  it('should dispatch addFavorites action after remove item', () => {
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();
    component.onRemoveButtonClick();
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it('photo should be equal snapshot data', () => {
    expect(component.photo).toEqual({
      id: 'Q_iJiVROn',
      url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
      width: 3024,
      height: 3780,
    });
  });
});
