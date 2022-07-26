import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [PhotosListComponent, PhotoItemComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [PhotosListComponent, PhotoItemComponent],
})
export class SharedModule {}
