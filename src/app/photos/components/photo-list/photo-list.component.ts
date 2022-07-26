import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhotoState } from '../../../store/reducers/photos.reducer';
import * as PhotosActions from '../../../store/actions/photos.actions';
import { selectPhotosAll } from '../../../store/selectors/photo.selector';
import { Photo } from '../../../core/models/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos$ = this.store.select<Photo[]>(selectPhotosAll);
  private limit = 6;

  constructor(private store: Store<{ photos: PhotoState }>) {}

  public ngOnInit(): void {
    this.loadImages();
  }

  public onPhotoClick(): void {
    console.log('click');
  }

  private loadImages(): void {
    this.store.dispatch(PhotosActions.GetImages({ limit: this.limit }));
  }
}
