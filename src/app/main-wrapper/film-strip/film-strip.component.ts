import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-strip',
  templateUrl: './film-strip.component.html',
  styleUrls: ['./film-strip.component.scss']
})
export class FilmStripComponent implements OnInit {
  @Input() UiModel: [{sidebar: string, sidebarExpanded: boolean, filmStripExpanded: boolean, darkMode: boolean, modalActive: boolean}];
  constructor() { }

  ngOnInit() {
  }

}
