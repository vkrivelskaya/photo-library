import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EntryComponent],
  imports: [NotFoundRoutingModule, CommonModule, RouterModule],
})
export class NotFoundModule {}
