import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() UiModel: [{sidebar: string, sidebarExpanded: boolean, filmStripExpanded: boolean, darkMode: boolean, modalActive: boolean}];
  constructor() { }

  ngOnInit() {
  }

}
