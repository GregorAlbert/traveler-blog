import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  companies = [
    {
      name: 'Unsplash',
      description: 'Beautiful, free photos, gifted by the world’s most generous community of photographers',
      link: 'https://unsplash.com/'
    },
    {
      name: 'Coverr',
      description: 'Beautiful, free videos for your homepage',
      link: 'https://coverr.co/'
    },
    {
      name: 'Google',
      description: 'American multinational technology company',
      link: 'https://www.google.com/intl/en/about/'
    }
  ];
  supporters = [
    {
      name: 'Kara Erickson',
      description: 'Works on Angular @ Google',
      link: 'https://twitter.com/karaforthewin'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
