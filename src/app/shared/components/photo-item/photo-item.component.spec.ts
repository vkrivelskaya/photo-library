import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoItemComponent } from './photo-item.component';

describe('PhotoItemComponent', () => {
  let component: PhotoItemComponent;
  let fixture: ComponentFixture<PhotoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoItemComponent);
    component = fixture.componentInstance;
    component.image = {
      breeds: [''],
      id: 'Q_iJiVROn',
      url: 'https://cdn2.thecatapi.com/images/Q_iJiVROn.jpg',
      width: 3024,
      height: 3780,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
