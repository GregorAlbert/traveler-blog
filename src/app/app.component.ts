import {Component, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {MatSidenav} from "@angular/material";
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
