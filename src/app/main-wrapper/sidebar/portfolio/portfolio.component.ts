import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../../portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    portfolio: Portfolio[] = [{
        id: 1,
        name: 'Sport',
        keyword: 'ff',
        description: '...desc...'
    },
        {
            id: 2,
            name: 'Eventy',
            keyword: 'ff',
            description: '...desc...'
        },
        {
            id: 3,
            name: 'Street',
            keyword: 'ff',
            description: '...desc...'
        },
        {
            id: 4,
            name: 'Produkty',
            keyword: 'ff',
            description: '...desc...'
        }];

  constructor() { }

  ngOnInit() {
  }

}
