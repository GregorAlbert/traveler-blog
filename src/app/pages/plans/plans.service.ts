import {Injectable} from '@angular/core';

class Plan {
  id: number;
  location: string;
  description: string;
  date: string;
}

@Injectable()
export class PlansService {

  plans: Plan[] = [
    {
      id: 1,
      location: 'Cairo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui eget justo ultrices sodales. Aliquam a suscipit ligula, id molestie mi. Suspendisse sed dictum diam. Fusce aliquet nec erat ac bibendum. Proin vitae turpis sit amet diam pulvinar consectetur vel et enim. Vivamus non fermentum nulla, ut bibendum leo. Nulla urna orci, fringilla at odio nec, elementum tristique augue. Praesent augue enim, placerat et elit eu, cursus finibus mi. Praesent pretium massa in arcu tincidunt, eget consequat nibh laoreet.',
      date: '12.2017',
    },
    {
      id: 2,
      location: 'New York',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui eget justo ultrices sodales. Aliquam a suscipit ligula, id molestie mi. Suspendisse sed dictum diam. Fusce aliquet nec erat ac bibendum. Proin vitae turpis sit amet diam pulvinar consectetur vel et enim. Vivamus non fermentum nulla, ut bibendum leo. Nulla urna orci, fringilla at odio nec, elementum tristique augue. Praesent augue enim, placerat et elit eu, cursus finibus mi. Praesent pretium massa in arcu tincidunt, eget consequat nibh laoreet.',
      date: '2.2018',
    },
    {
      id: 3,
      location: 'Sydney',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui eget justo ultrices sodales. Aliquam a suscipit ligula, id molestie mi. Suspendisse sed dictum diam. Fusce aliquet nec erat ac bibendum. Proin vitae turpis sit amet diam pulvinar consectetur vel et enim. Vivamus non fermentum nulla, ut bibendum leo. Nulla urna orci, fringilla at odio nec, elementum tristique augue. Praesent augue enim, placerat et elit eu, cursus finibus mi. Praesent pretium massa in arcu tincidunt, eget consequat nibh laoreet.',
      date: '5.2018',
    }
  ];

  public getPlans() {
    return this.plans;
  }

  constructor() {
  }

}
