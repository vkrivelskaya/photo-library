import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListComponent } from './photos-list.component';
import { By } from '@angular/platform-browser';
import { Photo } from '../../../core/models/photo';
import { first, of } from 'rxjs';

const expectedPhotos: Photo[] = [
  {
    breeds: [''],
    id: 'Q_iJiVROn',
    url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
    width: 3024,
    height: 3780,
  },
  {
    breeds: [''],
    height: 600,
    id: 'dhl',
    url: 'https://cdn2.thecatapi.com/images/dhl.jpg',
    width: 800,
  },
];

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    component.photos$ = of(expectedPhotos);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onPhotoClick on click event', () => {
    spyOn(component, 'onPhotoClick');
    const container = fixture.debugElement.query(By.css('mat-grid-tile'));
    container.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.onPhotoClick).toHaveBeenCalled();
  });

  it('should raise photoClicked event when clicked (triggerEventHandler)', () => {
    let selectedPhoto: Photo | undefined;
    component.photoClicked.pipe(first()).subscribe((photo: Photo) => (selectedPhoto = photo));

    const container = fixture.debugElement.query(By.css('mat-grid-tile'));
    container.triggerEventHandler('click');
    fixture.detectChanges();

    expect(selectedPhoto).toEqual({
      breeds: [''],
      id: 'Q_iJiVROn',
      url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
      width: 3024,
      height: 3780,
    });
  });
});
