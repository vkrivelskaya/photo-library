import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePath } from './core/constants/route-paths';

const routes: Routes = [
  {
    path: routePath.photos,
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule),
  },
  {
    path: routePath.favorites,
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule),
  },
  {
    path: routePath.notFound,
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: routePath.landing,
    redirectTo: routePath.photos,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: routePath.notFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
