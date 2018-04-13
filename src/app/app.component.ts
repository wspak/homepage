import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  UiConfig = {sidebar: 'portfolio', sidebarExpanded: true, filmStripExpanded: true, darkMode: false, modalActive: false};
}
