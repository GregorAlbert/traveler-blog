import { Component, OnInit } from '@angular/core';
import {PlansService} from './plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  providers: [PlansService]
})
export class PlansComponent implements OnInit {

  plans;

  constructor(private _plansService: PlansService) { }

  ngOnInit() {
    this.plans = this._plansService.getPlans();
  }

}
