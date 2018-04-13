import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../../gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    gallery: Gallery[] = [{
        id: 1,
        date: '',
        name: 'Windstorm',
        path: 'ff',
        description: '...desc...',
        thumbnail: 'v'
    },
    {
        id: 2,
        date: '',
        name: 'Windstorm2',
        path: 'ff',
        description: '...desc...',
        thumbnail: 'v'
    }];



  constructor() { }

  ngOnInit() {

  }

}
