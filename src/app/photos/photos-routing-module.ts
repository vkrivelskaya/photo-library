import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './components/photo-list/photo-list.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
