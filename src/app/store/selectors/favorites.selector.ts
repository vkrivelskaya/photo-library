import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from '../reducers/favorites.reducer';

export interface AppState {
  favoritesPhotos: FavoritesState;
}

export const selectFavoritesPhotos = createFeatureSelector<AppState, FavoritesState>('favoritesPhotos');

export const selectFavoritesPhotosAll = createSelector(selectFavoritesPhotos, state => state.images);

export const selectSelectedFavoritesPhotosAll = createSelector(selectFavoritesPhotos, state => state.selectedPhoto!);
