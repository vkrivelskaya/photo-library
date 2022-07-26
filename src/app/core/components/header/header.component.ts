import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { dictionary } from '../../constants/dictionary';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  public dictionary = dictionary;
  public isPhotoListActive = false;
  public isFavouritesListActive = false;
  public componentAlive$: ReplaySubject<unknown> = new ReplaySubject(1);

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  public ngOnInit() {
    this.router.events.pipe(takeUntil(this.componentAlive$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isPhotoListActive = event.url.includes('photos');
        this.isFavouritesListActive = event.url.includes('favorites');
        this.cdr.markForCheck();
      }
    });
  }

  public ngOnDestroy(): void {
    this.componentAlive$.next('');
    this.componentAlive$.complete();
  }
}
