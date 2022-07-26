import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotosRoutingModule } from './photos-routing-module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';

@NgModule({
  declarations: [PhotoListComponent, FavoriteItemComponent],
  imports: [CommonModule, PhotosRoutingModule, RouterModule, SharedModule, MatButtonModule],
  providers: [],
})
export class PhotosModule {}
