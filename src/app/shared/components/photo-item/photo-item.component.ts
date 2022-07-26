import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../../../core/models/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoItemComponent {
  @Input() public image!: Photo;
}
