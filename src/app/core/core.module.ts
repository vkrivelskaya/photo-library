import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, PageContainerComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [PageContainerComponent],
})
export class CoreModule {}
