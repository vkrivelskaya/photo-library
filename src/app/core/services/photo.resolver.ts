import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { Photo } from '../models/photo';
import { ActionsSubject, Store } from '@ngrx/store';
import * as FavoritesPhotosActions from '../../store/actions/favorites.actions';
import { ofType } from '@ngrx/effects';
import { FavoritesState } from '../../store/reducers/favorites.reducer';
import { selectSelectedFavoritesPhotosAll } from '../../store/selectors/favorites.selector';

@Injectable({
  providedIn: 'root',
})
export class PhotoResolver implements Resolve<Photo> {
  constructor(public store: Store<{ favoritesPhotos: FavoritesState }>, private actionListener$: ActionsSubject) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Photo> {
    this.store.dispatch(FavoritesPhotosActions.GetFavoritePhoto({ id: route.paramMap.get('id')! }));

    return this.actionListener$.pipe(
      ofType(FavoritesPhotosActions.GetFavoritePhoto),
      switchMap(() => this.store.select<Photo>(selectSelectedFavoritesPhotosAll)),
      take(1),
    );
  }
}
