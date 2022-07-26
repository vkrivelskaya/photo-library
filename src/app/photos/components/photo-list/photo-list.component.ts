import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhotoState } from '../../../store/reducers/photos.reducer';
import * as PhotosActions from '../../../store/actions/photos.actions';
import * as FavoritesPhotosActions from '../../../store/actions/favorites.actions';
import { selectPhotosAll } from '../../../store/selectors/photo.selector';
import { Photo } from '../../../core/models/photo';
import { FavoritesState } from '../../../store/reducers/favorites.reducer';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos$ = this.photosStore.select<Photo[]>(selectPhotosAll);
  private limit = 6;

  constructor(private photosStore: Store<{ photos: PhotoState }>, private favoritesStore: Store<{ favoritesPhotos: FavoritesState }>) {}

  public ngOnInit(): void {
    this.loadImages();
  }

  public onPhotoClick(photo: Photo): void {
    this.favoritesStore.dispatch(FavoritesPhotosActions.AddFavoritePhoto({ photo: photo }));
  }

  private loadImages(): void {
    this.photosStore.dispatch(PhotosActions.GetImages({ limit: this.limit }));
  }
}
