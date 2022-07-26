import { Photo } from '../../core/models/photo';
import { Action, createReducer, on } from '@ngrx/store';
import * as FavoritesPhotosActions from '../actions/favorites.actions';

export interface FavoritesState {
  images: Photo[];
  selectedPhoto: Photo | undefined;
}

export const initialState: FavoritesState = (() => {
  const favorites = localStorage.getItem('favorites');
  return { images: favorites ? JSON.parse(favorites) : [], selectedPhoto: undefined };
})();

function saveFavoritesToStorage(photos: Photo[]): void {
  localStorage.setItem('favorites', JSON.stringify(photos));
}

function addPhotoToState(state: FavoritesState, photo: Photo): FavoritesState {
  if (state.images.find(item => item.url === photo.url)) {
    return state;
  }
  return { ...state, images: [...state.images, photo] };
}

export const favoritesPhotoReducers = createReducer(
  initialState,
  on(FavoritesPhotosActions.AddFavoritePhoto, (state, { photo }) => {
    const newState = addPhotoToState(state, photo);
    saveFavoritesToStorage(newState.images);
    return newState;
  }),
  on(FavoritesPhotosActions.RemoveFavoritePhoto, (state, { photo }) => {
    const newState = { ...state, images: [...state.images.filter(el => el.id !== photo.id)] };
    saveFavoritesToStorage(newState.images);
    return newState;
  }),
  on(FavoritesPhotosActions.GetFavoritePhoto, (state, { id }) => {
    const selectedPhoto = state.images.find(el => el.id === id);
    return { ...state, selectedPhoto: selectedPhoto };
  }),
);

export function favoritesPhotoReducer(state: FavoritesState | undefined, action: Action): FavoritesState {
  return favoritesPhotoReducers(state, action);
}
