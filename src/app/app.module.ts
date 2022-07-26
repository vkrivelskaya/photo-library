import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PhotosEffects } from './store/effects/photos.effect';
import { photosReducer } from './store/reducers/photos.reducer';
import { favoritesPhotoReducer } from './store/reducers/favorites.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ photos: photosReducer, favoritesPhotos: favoritesPhotoReducer }, {}),
    EffectsModule.forRoot([PhotosEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
