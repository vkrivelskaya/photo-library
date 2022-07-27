import { PhotoState } from '../reducers/photos.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  photos: PhotoState;
}

export const selectPhotos = createFeatureSelector<PhotoState>('photos');
export const selectPhotosAll = createSelector(selectPhotos, state => state.images);
export const selectPhotosPending = createSelector(selectPhotos, state => state.pending);
