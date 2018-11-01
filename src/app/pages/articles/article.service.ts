import {Injectable} from '@angular/core';
import {EOL} from "os";

import loremIpsum from "lorem-ipsum";

var output = loremIpsum();

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
  output = loremIpsum({
    count: 10                     // Number of words, sentences, or paragraphs to generate.
    , units: 'sentences'            // Generate words, sentences, or paragraphs.
    , sentenceLowerBound: 12         // Minimum words per sentence.
    , sentenceUpperBound: 14        // Maximum words per sentence.
    , paragraphUpperBound: 1        // Maximum sentences per paragraph.
    , format: 'plain'               // Plain text or html
    , random: Math.random           // A PRNG function. Uses Math.random by default
  });


  articles: Article[] = [
    {
      id: 1,
      description: 'Tokyo',
      date: '7.2016',
      content: [
        loremIpsum({
          count: 10                     // Number of words, sentences, or paragraphs to generate.
          , units: 'sentences'            // Generate words, sentences, or paragraphs.
          , sentenceLowerBound: 12         // Minimum words per sentence.
          , sentenceUpperBound: 14        // Maximum words per sentence.
          , paragraphUpperBound: 1        // Maximum sentences per paragraph.
          , format: 'plain'               // Plain text or html
          , random: Math.random           // A PRNG function. Uses Math.random by default
        }),
        loremIpsum({
          count: 10                     // Number of words, sentences, or paragraphs to generate.
          , units: 'sentences'            // Generate words, sentences, or paragraphs.
          , sentenceLowerBound: 12         // Minimum words per sentence.
          , sentenceUpperBound: 14        // Maximum words per sentence.
          , paragraphUpperBound: 1        // Maximum sentences per paragraph.
          , format: 'plain'               // Plain text or html
          , random: Math.random           // A PRNG function. Uses Math.random by default
        }),
        this.output,
        this.output,
        this.output,
        this.output
      ],
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
      content: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dapibus erat. Integer purus nibh, fermentum eget elementum a, interdum id enim. Duis tincidunt bibendum turpis, sed lacinia lorem. Pellentesque blandit leo at scelerisque dictum. Fusce aliquet nunc erat, nec aliquam ligula convallis viverra. Maecenas ligula tellus, sodales a consectetur in, consectetur non justo. Donec egestas mollis leo. Curabitur congue sodales risus id vehicula. Nulla turpis enim, viverra a magna vitae, sagittis aliquam sapien. Praesent maximus nulla egestas, vulputate justo et, sagittis sem. Maecenas vel commodo diam, et iaculis nulla. Vivamus condimentum justo lacinia nibh aliquam varius. Duis sit amet magna sed augue consequat blandit.',
        'Nulla sed libero lacinia, consequat nisl vel, pharetra lorem. Mauris pellentesque nisi dui, eu congue felis semper eu. Fusce mattis magna quis dolor molestie, eu congue nisl placerat. Mauris sodales justo eu nunc tempor efficitur. Vivamus ex nibh, euismod in libero sit amet, consectetur fermentum massa. Curabitur euismod varius dolor, ac luctus tellus gravida sit amet. Nunc eu diam lectus. Praesent eu vulputate quam, quis ultrices magna. Duis vel orci vitae augue tincidunt vestibulum. Nulla elementum lacinia massa vitae elementum. In et elementum nisl, a blandit orci. Vestibulum vehicula, purus a rutrum interdum, elit nulla hendrerit nunc, at mattis massa lorem sed ante. Nulla facilisi. Morbi semper sapien ornare sagittis laoreet.',
        'Aenean congue massa nec sagittis placerat. Sed tincidunt pellentesque tempus. Pellentesque in lacinia elit, ac laoreet ante. Vestibulum quis nibh ut nunc dignissim porttitor eget vel nulla. Mauris enim leo, ultrices id augue et, vehicula malesuada tellus. Mauris ut imperdiet mauris. Mauris consectetur vehicula nunc, quis sollicitudin tortor elementum sit amet. Phasellus in arcu sit amet orci eleifend mattis eget ut risus. Morbi id tincidunt turpis. Sed nec ante sit amet est auctor varius. Etiam at ullamcorper mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse interdum mauris leo, ut finibus tortor lacinia quis.',
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non pulvinar sapien. Integer nec aliquam sem. Quisque vel ultrices massa, at gravida metus. Aliquam vel libero condimentum, semper sapien nec, volutpat libero. Etiam tincidunt iaculis laoreet. Curabitur posuere risus quis elit condimentum, ac finibus justo consequat.',
        'Nulla sed libero lacinia, consequat nisl vel, pharetra lorem. Mauris pellentesque nisi dui, eu congue felis semper eu. Fusce mattis magna quis dolor molestie, eu congue nisl placerat. Mauris sodales justo eu nunc tempor efficitur. Vivamus ex nibh, euismod in libero sit amet, consectetur fermentum massa. Curabitur euismod varius dolor, ac luctus tellus gravida sit amet. Nunc eu diam lectus. Praesent eu vulputate quam, quis ultrices magna. Duis vel orci vitae augue tincidunt vestibulum. Nulla elementum lacinia massa vitae elementum. In et elementum nisl, a blandit orci. Vestibulum vehicula, purus a rutrum interdum, elit nulla hendrerit nunc, at mattis massa lorem sed ante. Nulla facilisi. Morbi semper sapien ornare sagittis laoreet.',
        'Vestibulum eu tellus quis mi bibendum varius. Morbi malesuada ipsum risus, sit amet lobortis tortor maximus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla luctus urna eget justo commodo, vel finibus magna mattis. Phasellus felis magna, tincidunt nec velit nec, semper volutpat mi. Nam tincidunt convallis aliquet. Nam cursus nisl eu arcu porta vestibulum. In non augue eget mauris feugiat ultrices. Ut pulvinar urna finibus, dapibus nisl ut, pulvinar augue. Duis eget nisi rhoncus, consequat dui at, malesuada nisi. Vivamus tincidunt nunc id egestas congue. Praesent pellentesque iaculis massa non hendrerit.'
      ],
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
      content: [
        'Nulla sed libero lacinia, consequat nisl vel, pharetra lorem. Mauris pellentesque nisi dui, eu congue felis semper eu. Fusce mattis magna quis dolor molestie, eu congue nisl placerat. Mauris sodales justo eu nunc tempor efficitur. Vivamus ex nibh, euismod in libero sit amet, consectetur fermentum massa. Curabitur euismod varius dolor, ac luctus tellus gravida sit amet. Nunc eu diam lectus. Praesent eu vulputate quam, quis ultrices magna. Duis vel orci vitae augue tincidunt vestibulum. Nulla elementum lacinia massa vitae elementum. In et elementum nisl, a blandit orci. Vestibulum vehicula, purus a rutrum interdum, elit nulla hendrerit nunc, at mattis massa lorem sed ante. Nulla facilisi. Morbi semper sapien ornare sagittis laoreet.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dapibus erat. Integer purus nibh, fermentum eget elementum a, interdum id enim. Duis tincidunt bibendum turpis, sed lacinia lorem. Pellentesque blandit leo at scelerisque dictum. Fusce aliquet nunc erat, nec aliquam ligula convallis viverra. Maecenas ligula tellus, sodales a consectetur in, consectetur non justo. Donec egestas mollis leo. Curabitur congue sodales risus id vehicula. Nulla turpis enim, viverra a magna vitae, sagittis aliquam sapien. Praesent maximus nulla egestas, vulputate justo et, sagittis sem. Maecenas vel commodo diam, et iaculis nulla. Vivamus condimentum justo lacinia nibh aliquam varius. Duis sit amet magna sed augue consequat blandit.',
        'Aenean congue massa nec sagittis placerat. Sed tincidunt pellentesque tempus. Pellentesque in lacinia elit, ac laoreet ante. Vestibulum quis nibh ut nunc dignissim porttitor eget vel nulla. Mauris enim leo, ultrices id augue et, vehicula malesuada tellus. Mauris ut imperdiet mauris. Mauris consectetur vehicula nunc, quis sollicitudin tortor elementum sit amet. Phasellus in arcu sit amet orci eleifend mattis eget ut risus. Morbi id tincidunt turpis. Sed nec ante sit amet est auctor varius. Etiam at ullamcorper mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse interdum mauris leo, ut finibus tortor lacinia quis.',
        'Nulla sed libero lacinia, consequat nisl vel, pharetra lorem. Mauris pellentesque nisi dui, eu congue felis semper eu. Fusce mattis magna quis dolor molestie, eu congue nisl placerat. Mauris sodales justo eu nunc tempor efficitur. Vivamus ex nibh, euismod in libero sit amet, consectetur fermentum massa. Curabitur euismod varius dolor, ac luctus tellus gravida sit amet. Nunc eu diam lectus. Praesent eu vulputate quam, quis ultrices magna. Duis vel orci vitae augue tincidunt vestibulum. Nulla elementum lacinia massa vitae elementum. In et elementum nisl, a blandit orci. Vestibulum vehicula, purus a rutrum interdum, elit nulla hendrerit nunc, at mattis massa lorem sed ante. Nulla facilisi. Morbi semper sapien ornare sagittis laoreet.',
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non pulvinar sapien. Integer nec aliquam sem. Quisque vel ultrices massa, at gravida metus. Aliquam vel libero condimentum, semper sapien nec, volutpat libero. Etiam tincidunt iaculis laoreet. Curabitur posuere risus quis elit condimentum, ac finibus justo consequat.',
        'Vestibulum eu tellus quis mi bibendum varius. Morbi malesuada ipsum risus, sit amet lobortis tortor maximus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla luctus urna eget justo commodo, vel finibus magna mattis. Phasellus felis magna, tincidunt nec velit nec, semper volutpat mi. Nam tincidunt convallis aliquet. Nam cursus nisl eu arcu porta vestibulum. In non augue eget mauris feugiat ultrices. Ut pulvinar urna finibus, dapibus nisl ut, pulvinar augue. Duis eget nisi rhoncus, consequat dui at, malesuada nisi. Vivamus tincidunt nunc id egestas congue. Praesent pellentesque iaculis massa non hendrerit.'
      ],
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
      content: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dapibus erat. Integer purus nibh, fermentum eget elementum a, interdum id enim. Duis tincidunt bibendum turpis, sed lacinia lorem. Pellentesque blandit leo at scelerisque dictum. Fusce aliquet nunc erat, nec aliquam ligula convallis viverra. Maecenas ligula tellus, sodales a consectetur in, consectetur non justo. Donec egestas mollis leo. Curabitur congue sodales risus id vehicula. Nulla turpis enim, viverra a magna vitae, sagittis aliquam sapien. Praesent maximus nulla egestas, vulputate justo et, sagittis sem. Maecenas vel commodo diam, et iaculis nulla. Vivamus condimentum justo lacinia nibh aliquam varius. Duis sit amet magna sed augue consequat blandit.',
        'Aenean congue massa nec sagittis placerat. Sed tincidunt pellentesque tempus. Pellentesque in lacinia elit, ac laoreet ante. Vestibulum quis nibh ut nunc dignissim porttitor eget vel nulla. Mauris enim leo, ultrices id augue et, vehicula malesuada tellus. Mauris ut imperdiet mauris. Mauris consectetur vehicula nunc, quis sollicitudin tortor elementum sit amet. Phasellus in arcu sit amet orci eleifend mattis eget ut risus. Morbi id tincidunt turpis. Sed nec ante sit amet est auctor varius. Etiam at ullamcorper mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse interdum mauris leo, ut finibus tortor lacinia quis.',
        'Nulla sed libero lacinia, consequat nisl vel, pharetra lorem. Mauris pellentesque nisi dui, eu congue felis semper eu. Fusce mattis magna quis dolor molestie, eu congue nisl placerat. Mauris sodales justo eu nunc tempor efficitur. Vivamus ex nibh, euismod in libero sit amet, consectetur fermentum massa. Curabitur euismod varius dolor, ac luctus tellus gravida sit amet. Nunc eu diam lectus. Praesent eu vulputate quam, quis ultrices magna. Duis vel orci vitae augue tincidunt vestibulum. Nulla elementum lacinia massa vitae elementum. In et elementum nisl, a blandit orci. Vestibulum vehicula, purus a rutrum interdum, elit nulla hendrerit nunc, at mattis massa lorem sed ante. Nulla facilisi. Morbi semper sapien ornare sagittis laoreet.',
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non pulvinar sapien. Integer nec aliquam sem. Quisque vel ultrices massa, at gravida metus. Aliquam vel libero condimentum, semper sapien nec, volutpat libero. Etiam tincidunt iaculis laoreet. Curabitur posuere risus quis elit condimentum, ac finibus justo consequat.',
        'Vestibulum eu tellus quis mi bibendum varius. Morbi malesuada ipsum risus, sit amet lobortis tortor maximus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla luctus urna eget justo commodo, vel finibus magna mattis. Phasellus felis magna, tincidunt nec velit nec, semper volutpat mi. Nam tincidunt convallis aliquet. Nam cursus nisl eu arcu porta vestibulum. In non augue eget mauris feugiat ultrices. Ut pulvinar urna finibus, dapibus nisl ut, pulvinar augue. Duis eget nisi rhoncus, consequat dui at, malesuada nisi. Vivamus tincidunt nunc id egestas congue. Praesent pellentesque iaculis massa non hendrerit.'
      ],
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

  constructor() {
  }

}
