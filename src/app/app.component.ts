import {Component, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {MatSidenav} from "@angular/material";
import * as screenfull from 'screenfull';
import {routerTransition} from "./shared/animation/router-animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {
  isFullScreen = false;
  isDarkTheme;
  isSideNavOpened = false;
  showDelay = 300;
  currentHour = new Date().getHours();

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router: Router) {
    this.isDarkTheme = this.currentHour < 8 || this.currentHour > 19;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  toggleFullScreen() {
    if (screenfull.enabled) {
      this.isFullScreen = !this.isFullScreen;
      screenfull.toggle();
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleSideNav() {
    this.isSideNavOpened = !this.isSideNavOpened;
    this.sidenav.toggle();
  }

  public prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData['animation']);
    console.log("c", outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
