import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../articles/article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css'],
  providers: [ArticleService]
})
export class PlaceDetailComponent implements OnInit {
  articleID: number;
  articles;
  article;

  constructor(private _router: Router, private route: ActivatedRoute, private _articleService: ArticleService) {
    this.route.params.subscribe(
      params => this.articleID = params['id']
    );
    this.article = _articleService.getArticleById(this.articleID);
  }

  ngOnInit() {
    this.articles = this._articleService.getArticles();
  }

  routeArticle(art) {
    this._router.navigate(['/article', art.id]);
  }

  routeGallery(art) {
    this._router.navigate(['/gallery', art.id]);
  }

}
