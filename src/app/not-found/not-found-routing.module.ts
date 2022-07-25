import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
