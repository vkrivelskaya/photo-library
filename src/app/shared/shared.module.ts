import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [PhotosListComponent, PhotoItemComponent, LoadingComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [PhotosListComponent, PhotoItemComponent, LoadingComponent],
})
export class SharedModule {}
