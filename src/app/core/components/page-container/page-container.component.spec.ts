import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainerComponent } from './page-container.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Photo } from '../../models/photo';
import { By } from '@angular/platform-browser';

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
  pending: false,
};

describe('PageContainerComponent', () => {
  let component: PageContainerComponent;
  let fixture: ComponentFixture<PageContainerComponent>;
  let store: MockStore<{
    images: Photo[];
    pending: boolean;
  }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageContainerComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addImages on scroll event', () => {
    spyOn(component, 'addImages');
    const container = fixture.debugElement.query(By.css('.main-content'));
    container.triggerEventHandler('scroll');
    fixture.detectChanges();

    expect(component.addImages).toHaveBeenCalled();
  });

  it('should dispatch addImages action', () => {
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();
    component.onWindowScroll();
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
