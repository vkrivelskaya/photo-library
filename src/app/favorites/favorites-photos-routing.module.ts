import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPhotosRoutingModule {}
