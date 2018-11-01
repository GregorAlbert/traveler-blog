import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article-gallery.component.html',
  styleUrls: ['./article-gallery.component.css'],
  providers: [ArticleService]
})
export class ArticleGalleryComponent implements OnInit {
  articleID: number;
  article;
  actualPicture: number;

  constructor(private route: ActivatedRoute, private _articleService: ArticleService) {
    this.actualPicture = 0;
    this.route.params.subscribe(
      params => this.articleID = params['id']
    );
    this.article = _articleService.getArticleById(this.articleID);
  }

  ngOnInit() {
  }

  next() {
    if (this.actualPicture + 1 === this.article.gallery.length) {
      this.actualPicture = 0;
    } else {
      this.actualPicture++;
    }
  }

  previous() {
    if (this.actualPicture === 0) {
      this.actualPicture = this.article.gallery.length - 1;
    } else {
      this.actualPicture--;
    }
  }

}
