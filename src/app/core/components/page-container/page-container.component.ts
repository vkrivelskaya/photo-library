import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhotoState } from '../../../store/reducers/photos.reducer';
import * as PhotosActions from '../../../store/actions/photos.actions';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContainerComponent {
  private limit = 3;

  constructor(public store: Store<{ photos: PhotoState }>) {}

  public onWindowScroll(): void {
    this.addImages();
  }

  public addImages(): void {
    this.store.dispatch(PhotosActions.AddImages({ limit: this.limit }));
  }
}
