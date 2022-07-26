import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dictionary } from '../../constants/dictionary';
import { routePath } from '../../constants/route-paths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public dictionary = dictionary;
  public routePath = routePath;
}
