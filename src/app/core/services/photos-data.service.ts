import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosDataService {
  private photoEndpoint: string = 'https://api.thecatapi.com/v1/images/search';
  private photoType: string = 'jpg';

  constructor(private httpClient: HttpClient) {}

  public getImages(limit: string): Observable<Photo[]> {
    const params = new HttpParams().set('limit', limit).set('mime_types', this.photoType);
    return this.httpClient.get<Photo[]>(this.photoEndpoint + '?' + params);
  }
}
