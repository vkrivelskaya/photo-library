import { Photo } from '../../core/models/photo';
import * as PhotosActions from '../actions/photos.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface PhotoState {
  pending: boolean;
  images: Photo[];
}

export const initialState: PhotoState = {
  pending: false,
  images: [],
};

export const photosReducers = createReducer(
  initialState,
  on(PhotosActions.GetImages, state => {
    return {
      ...state,
      pending: true,
      images: [],
    };
  }),
  on(PhotosActions.AddImages, state => {
    return {
      ...state,
      pending: true,
      images: [...state.images],
    };
  }),
  on(PhotosActions.ImagesLoaded, (state, { imageResponse }) => {
    return {
      ...state,
      pending: false,
      images: imageResponse,
    };
  }),
  on(PhotosActions.ImagesAdded, (state, { imageResponse }) => {
    return {
      ...state,
      pending: false,
      images: [...state.images, ...imageResponse],
    };
  }),
);

export function photosReducer(state: PhotoState | undefined, action: Action): PhotoState {
  return photosReducers(state, action);
}
