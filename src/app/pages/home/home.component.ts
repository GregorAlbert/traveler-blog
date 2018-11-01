import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../articles/article.service';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0.1,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  lastArticle;
  public state = "closed";

  constructor(private _articleService: ArticleService) {
  }

  ngOnInit() {
    this.lastArticle = this._articleService.getLastArticle();
    setTimeout(() => {
      this.state = "open";
    }, 1000)
  }

}
