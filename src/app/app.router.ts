import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {PlacesComponent} from "./pages/places/places.component";
import {SponsorsComponent} from "./pages/sponsors/sponsors.component";
import {ModuleWithProviders} from "@angular/core";
import {ContactComponent} from "./pages/contact/contact.component";
import {PlansComponent} from "./pages/plans/plans.component";
import {AboutComponent} from "./pages/about/about.component";
import {ArticleListComponent} from "./pages/articles/article-list/article-list.component";
import {PlaceDetailComponent} from "./pages/places/place-detail/place-detail.component";
import {ArticleDetailComponent} from "./pages/articles/article-detail/article-detail.component";
import {ArticleGalleryComponent} from "./pages/articles/article-gallery/article-gallery.component";

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {animation: 'routerTransition'}},
  {path: 'articles', component: ArticleListComponent, data: {animation: 'a'}},
  {path: 'about', component: AboutComponent, data: {animation: 'routerTransition'}},
  {path: 'places', component: PlacesComponent , data: {animation: 'a'}},
  {path: 'plans', component: PlansComponent , data: {animation: 'routerTransition'}},
  {path: 'sponsors', component: SponsorsComponent, data: {animation: 'a'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'routerTransition'}},
  {path: 'article/:id', component: ArticleDetailComponent},
  {path: 'gallery/:id', component: ArticleGalleryComponent},
  {path: 'places/:id', component: PlaceDetailComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
