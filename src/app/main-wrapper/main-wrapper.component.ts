import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {
  @Input() UiModel: [{sidebar: string, sidebarExpanded: boolean, filmStripExpanded: boolean, darkMode: boolean, modalActive: boolean}];
  constructor() { }

  ngOnInit() {
  }

}
