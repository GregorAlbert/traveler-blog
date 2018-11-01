import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../articles/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  lastArticle;

  constructor(private _articleService: ArticleService) {
  }

  ngOnInit() {
    this.lastArticle = this._articleService.getLastArticle();
  }

}
