import { createAction, props } from '@ngrx/store';
import { Photo } from '../../core/models/photo';

export enum FavoritesPhotosActionsTypes {
  ADD_PHOTO = '[Favorites photos] Add Photo',
  REMOVE_PHOTO = '[Favorites photos] Remove Photo',
  GET_PHOTO = '[Favorites photos] Get Photo',
  // SET_PHOTO= '[Favorites photos] Set Photo',
}

export const AddFavoritePhoto = createAction(FavoritesPhotosActionsTypes.ADD_PHOTO, props<{ photo: Photo }>());

export const RemoveFavoritePhoto = createAction(FavoritesPhotosActionsTypes.REMOVE_PHOTO, props<{ photo: Photo }>());

export const GetFavoritePhoto = createAction(FavoritesPhotosActionsTypes.GET_PHOTO, props<{ id: string }>());

//export const SetFavoritePhoto = createAction(FavoritesPhotosActionsTypes.SET_PHOTO, props<{ photo: Photo }>());
