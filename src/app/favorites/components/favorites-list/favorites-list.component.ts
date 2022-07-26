import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Photo } from '../../../core/models/photo';
import { Store } from '@ngrx/store';
import { FavoritesState } from '../../../store/reducers/favorites.reducer';
import { selectFavoritesPhotosAll } from '../../../store/selectors/favorites.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesListComponent {
  public favoritePhotos$ = this.store.select<Photo[]>(selectFavoritesPhotosAll);

  constructor(private store: Store<{ favoritesPhotos: FavoritesState }>, private router: Router) {}

  public onPhotoClick(photo: Photo) {
    this.router.navigate(['photos', photo.id]);
  }
}
