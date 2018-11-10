import {Injectable} from '@angular/core';
import {TextGeneratorService} from "../../shared/services/text-generator.service";

class Article {
  id: number;
  description: string;
  date: string;
  content: string[];
  gallery: string[];
  lat: number;
  lon: number;
  zoom: number;
}

@Injectable()
export class ArticleService {

  public constructor(private textGeneratorService: TextGeneratorService) {
  }

  articles: Article[] = [
    {
      id: 1,
      description: 'Tokyo',
      date: '7.2016',
      content: this.textGeneratorService.getText(7),
      gallery: [
        '/assets/images/articles/1/alejandro-gonzalez-40759.jpg',
        '/assets/images/articles/1/alexandre-chambon-176121.jpg',
        '/assets/images/articles/1/andre-benz-248755.jpg',
        '/assets/images/articles/1/clay-banks-170882.jpg',
        '/assets/images/articles/1/andre-benz-256770.jpg',
        '/assets/images/articles/1/erik-eastman-354264.jpg',
        '/assets/images/articles/1/jason-ortego-5383.jpg',
        '/assets/images/articles/1/sorasak-252182.jpg',
        '/assets/images/articles/1/thomas-marban-336946.jpg',
        '/assets/images/articles/1/tianshu-liu-242331.jpg'
      ],
      lat: 35.6959669,
      lon: 139.7809302,
      zoom: 13
    },
    {
      id: 2,
      description: 'Rio',
      date: '1.2017',
      content: this.textGeneratorService.getText(6),
      gallery: [
        '/assets/images/articles/2/agustin-diaz-185846.jpg',
        '/assets/images/articles/2/carissa-gan-45754.jpg',
        '/assets/images/articles/2/joao-pedro-vergara-401699.jpg',
        '/assets/images/articles/2/matheus-torrezan-318015.jpg',
        '/assets/images/articles/2/nad-hemnani-58324.jpg',
        '/assets/images/articles/2/nikita-andreev-410093.jpg',
        '/assets/images/articles/2/robert-nyman-442994.jpg'
      ],
      lat: -22.9189916,
      lon: -43.1773499,
      zoom: 13
    },
    {
      id: 3,
      description: 'Cape Town',
      date: '3.2017',
      content: this.textGeneratorService.getText(6),
      gallery: [
        '/assets/images/articles/3/arno-smit-141735.jpg',
        '/assets/images/articles/3/cara-fuller-289892.jpg',
        '/assets/images/articles/3/clinton-naik-200638.jpg',
        '/assets/images/articles/3/connor-vercueil-151199.jpg',
        '/assets/images/articles/3/joel-herzog-97502.jpg',
        '/assets/images/articles/3/joshua-earle-234344.jpg',
        '/assets/images/articles/3/ken-treloar-411415.jpg',
        '/assets/images/articles/3/matthieu-joannon-409742.jpg',
        '/assets/images/articles/3/tim-johnson-328094.jpg',
      ],
      lat: -33.9304399,
      lon: 18.4413946,
      zoom: 13
    },
    {
      id: 4,
      description: 'Paris',
      date: '6.2017',
      content: this.textGeneratorService.getText(5),
      gallery: [
        '/assets/images/articles/4/chris-karidis-339335.jpg',
        '/assets/images/articles/4/john-towner-125990.jpg',
        '/assets/images/articles/4/leonard-cotte-309285.jpg',
        '/assets/images/articles/4/pedro-lastra-159224.jpg',
        '/assets/images/articles/4/sebastian-yepes-273295.jpg',
        '/assets/images/articles/4/vitoria-beatriz-fetter-398826.jpg',
        '/assets/images/articles/4/willian-west-346731.jpg'
      ],
      lat: 48.8517628,
      lon: 2.3602661,
      zoom: 11
    }
  ];

  public getArticles() {
    return this.articles;
  }

  public getArticleById(id: number) {
    return this.articles.filter(x => x.id == id)[0];
  }

  public getLastArticle() {
    return this.articles[this.articles.length - 1];
  }

}
