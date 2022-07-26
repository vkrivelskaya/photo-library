import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { routePath } from '../core/constants/route-paths';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { PhotoResolver } from '../core/services/photo-resolver.resolver';

const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent,
  },
  {
    path: routePath.photoDetail,
    component: FavoriteItemComponent,
    resolve: [PhotoResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
