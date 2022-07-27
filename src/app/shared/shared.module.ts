import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoadingComponent } from './components/loading/loading.component';

const components = [PhotosListComponent, PhotoItemComponent, LoadingComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatGridListModule],
  exports: [...components],
})
export class SharedModule {}
