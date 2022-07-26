import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { FavoritesPhotosRoutingModule } from './favorites-photos-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FavoritesListComponent],
  imports: [CommonModule, FavoritesPhotosRoutingModule, RouterModule, SharedModule],
})
export class FavoritesModule {}
