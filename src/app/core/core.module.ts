import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, PageContainerComponent],
  imports: [CommonModule, MatButtonModule, HttpClientModule, RouterModule],
  exports: [PageContainerComponent],
})
export class CoreModule {}
