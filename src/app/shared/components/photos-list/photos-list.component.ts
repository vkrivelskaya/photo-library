import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../../core/models/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent {
  @Input() public photos$!: Observable<Photo[]>;
  @Output() public photoClicked = new EventEmitter();

  public onPhotoClick(photo: Photo): void {
    this.photoClicked.emit(photo);
  }
}
