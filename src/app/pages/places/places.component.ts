import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../articles/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  providers: [ArticleService]
})
export class PlacesComponent implements OnInit {
  selectedArticle;
  articles;

  constructor(private _router: Router, private _articleService: ArticleService) {
  }

  ngOnInit() {
    this.articles = this._articleService.getArticles();
  }

  routeArticle(art) {
    this.selectedArticle = art;
    this._router.navigate(['/article', art.id]);
  }

  routeGallery(art) {
    this.selectedArticle = art;
    this._router.navigate(['/gallery', art.id]);
  }

}
