import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {HomeComponent} from './pages/home/home.component';
import {PlacesComponent} from './pages/places/places.component';
import {PlansComponent} from './pages/plans/plans.component';
import {SponsorsComponent} from './pages/sponsors/sponsors.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routes} from "./app.router";
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import {TravelerComponent} from "./pages/about/traveler/traveler.component";
import {ArticleListComponent} from "./pages/articles/article-list/article-list.component";
import {PlaceDetailComponent} from "./pages/places/place-detail/place-detail.component";
import {ArticleDetailComponent} from "./pages/articles/article-detail/article-detail.component";
import {HttpClientModule} from "@angular/common/http";
import {ArticleGalleryComponent} from "./pages/articles/article-gallery/article-gallery.component";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ArticleListComponent,
    AboutComponent,
    PlacesComponent,
    PlansComponent,
    SponsorsComponent,
    ArticleDetailComponent,
    ArticleGalleryComponent,
    PlaceDetailComponent,
    TravelerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routes,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
