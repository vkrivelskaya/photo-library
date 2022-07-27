import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

const initialFavoritesState = {
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

const initialPhotoState = {
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
  pending: false,
};

const initialState = {
  photos: initialPhotoState,
  favoritesPhotos: initialFavoritesState,
};

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListComponent],
      providers: [provideMockStore({ initialState: initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadImages onInit', () => {
    spyOn(component, 'loadImages');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.loadImages).toHaveBeenCalledTimes(1);
  });

  it('should dispatch getImages action', () => {
    const storeSpy = spyOn(component.photosStore, 'dispatch').and.callThrough();
    component.loadImages();
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it('should call onPhotoClick on click event', () => {
    spyOn(component, 'onPhotoClick');
    console.log(fixture.debugElement);
    const container = fixture.debugElement.query(By.css('app-photos-list'));
    container.triggerEventHandler('photoClicked');
    fixture.detectChanges();

    expect(component.onPhotoClick).toHaveBeenCalled();
  });

  it('should dispatch addFavorites action', () => {
    const storeSpy = spyOn(component.favoritesStore, 'dispatch').and.callThrough();
    component.onPhotoClick({
      breeds: [''],
      id: 'Q_iJiVROn',
      url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
      width: 3024,
      height: 3780,
    });
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
