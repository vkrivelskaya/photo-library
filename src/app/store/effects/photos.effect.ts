import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, EMPTY, map, mergeMap, Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import * as PhotosActions from '../actions/photos.actions';
import { PhotoState } from '../reducers/photos.reducer';
import { PhotosDataService } from '../../core/services/photos-data.service';

@Injectable()
export class PhotosEffects {
  public loadImages$: Observable<Action> = createEffect(() =>
    { return this.actions$.pipe(
      ofType(PhotosActions.GetImages),
      mergeMap(action =>
        this.photosDataService.getImages(action.limit.toString()).pipe(
          map(response => PhotosActions.ImagesLoaded({ imageResponse: response })),
          catchError(() => EMPTY),
        ),
      ),
    ) },
  );

  public addImages$: Observable<Action> = createEffect(() =>
    { return this.actions$.pipe(
      ofType(PhotosActions.AddImages),
      debounceTime(1000),
      mergeMap(action =>
        this.photosDataService.getImages(action.limit.toString()).pipe(
          map(response => PhotosActions.ImagesAdded({ imageResponse: response })),
          catchError(() => EMPTY),
        ),
      ),
    ) },
  );

  constructor(private store: Store<{ photos: PhotoState }>, private actions$: Actions, private photosDataService: PhotosDataService) {}
}
