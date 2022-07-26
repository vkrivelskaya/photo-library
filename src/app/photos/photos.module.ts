import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotosRoutingModule } from './photos-routing-module';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotosRoutingModule, RouterModule, MatGridListModule],
  providers: [],
})
export class PhotosModule {}
