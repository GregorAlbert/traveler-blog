import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

  articles;

  constructor(private _router: Router, private _articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this._articleService.getArticles();
  }

  routeArticle(art) {
    this._router.navigate(['/article', art.id]);
  }

  routeGallery(art) {
    this._router.navigate(['/gallery', art.id]);
  }

  routePlaces(art) {
    this._router.navigate(['/places', art.id]);
  }


}
