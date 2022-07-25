import { Component } from '@angular/core';
import { dictionary } from '../../core/constants/dictionary';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  dictionary = dictionary;
}
