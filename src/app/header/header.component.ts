import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() UiModel: {sidebar: string, sidebarExpanded: boolean, filmStripExpanded: boolean, darkMode: boolean, modalActive: boolean};
  constructor() { }

  ngOnInit() {
  }
  loadSidebar(sidebar) {
    /* if it's not the same */
    if (this.UiModel.sidebar === sidebar ) {
      this.UiModel.sidebarExpanded = true;
    } else {
        /* hide sidebar if expanded */
        if (this.UiModel.sidebarExpanded === true ) {
            this.UiModel.sidebarExpanded = false;
            const that = this;
            setTimeout(function(){ that.showSidebar(sidebar); }, 800);
        } else {
            this.showSidebar(sidebar);
        }
    }
  }
  showSidebar(sidebar) {
      /* set sidebar content */
      this.UiModel.sidebar = sidebar;
      /* expand sidebar */
      this.UiModel.sidebarExpanded = true;
  }

}
