import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dictionary } from '../../../core/constants/dictionary';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FavoritesState } from '../../../store/reducers/favorites.reducer';
import * as FavoritesPhotosActions from '../../../store/actions/favorites.actions';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteItemComponent {
  public dictionary = dictionary;
  public photo = this.route.snapshot.data['0'];

  constructor(private route: ActivatedRoute, private router: Router, public favoritesStore: Store<{ favoritesPhotos: FavoritesState }>) {}

  public onRemoveButtonClick(): void {
    this.favoritesStore.dispatch(FavoritesPhotosActions.RemoveFavoritePhoto({ photo: this.photo }));
    this.router.navigate(['favorites']);
  }
}
