import { PhotosDataService } from './photos-data.service';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { of } from 'rxjs';

describe('PhotosDataService', () => {
  let service: PhotosDataService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PhotosDataService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected photos (HttpClient called once)', (done: DoneFn) => {
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

    httpClientSpy.get.and.returnValue(of(expectedPhotos));

    service.getImages('2').subscribe({
      next: heroes => {
        expect(heroes).withContext('expected heroes').toEqual(expectedPhotos);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
