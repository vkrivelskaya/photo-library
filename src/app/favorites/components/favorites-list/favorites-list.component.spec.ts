import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListComponent } from './favorites-list.component';
import { Router } from '@angular/router';
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
describe('FavoritesListComponent', () => {
  let component: FavoritesListComponent;
  let fixture: ComponentFixture<FavoritesListComponent>;
  let store: MockStore<{
    images: Photo[];
    selectedPhoto: Photo | undefined;
  }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesListComponent],
      providers: [provideMockStore({ initialState }), { provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onPhotoClick on click event', () => {
    spyOn(component, 'onPhotoClick');
    const container = fixture.debugElement.query(By.css('app-photos-list'));
    container.triggerEventHandler('photoClicked');
    fixture.detectChanges();

    expect(component.onPhotoClick).toHaveBeenCalled();
  });

  it(`should navigate to photos`, () => {
    component.onPhotoClick({
      breeds: [''],
      id: 'Q_iJiVROn',
      url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
      width: 3024,
      height: 3780,
    });
    expect(routerSpy.navigate).toHaveBeenCalledWith(['photos', 'Q_iJiVROn']);
  });
});
