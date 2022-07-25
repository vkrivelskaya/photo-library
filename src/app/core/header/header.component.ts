import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dictionary } from '../constants/dictionary';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  dictionary = dictionary;
}
