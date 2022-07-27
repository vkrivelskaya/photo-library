import { createAction, props } from '@ngrx/store';
import { Photo } from '../../core/models/photo';

export enum PhotosActionsTypes {
  GET_IMAGES = '[Photo Gallery] Get Images',
  ADD_IMAGES = '[Photo Gallery] Add Images',
  IMAGES_LOADED = '[Photo Gallery] Images Loaded',
  IMAGES_ADDED = '[Photo Gallery] Images Added',
}

export const GetImages = createAction(PhotosActionsTypes.GET_IMAGES, props<{ limit: number }>());
export const AddImages = createAction(PhotosActionsTypes.ADD_IMAGES, props<{ limit: number }>());
export const ImagesLoaded = createAction(PhotosActionsTypes.IMAGES_LOADED, props<{ imageResponse: Photo[] }>());
export const ImagesAdded = createAction(PhotosActionsTypes.IMAGES_ADDED, props<{ imageResponse: Photo[] }>());
