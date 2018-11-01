import {Component, OnInit} from '@angular/core';

class Traveler {
  name: string;
  position: string;
  picture: string;
}

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit {
  travelers: Traveler[];

  constructor() {
    this.travelers = [
      {
        name: 'Simon Kavagnah',
        position: 'Driver',
        picture: '/assets/images/travelers/simon.png'
      },
      {
        name: 'Alice Pearson',
        position: 'Coordinator',
        picture: '/assets/images/travelers/alice.png'
      },
      {
        name: 'Mike Henry',
        position: 'Photographer',
        picture: '/assets/images/travelers/mike.png'
      }
    ];
  }

  ngOnInit() {
  }

}
