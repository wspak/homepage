import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './main-wrapper/sidebar/gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './main-wrapper/sidebar/sidebar.component';
import { FilmStripComponent } from './main-wrapper/film-strip/film-strip.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { PortfolioComponent } from './main-wrapper/sidebar/portfolio/portfolio.component';

/*

Routing's:
- /blog
    params{SidebarEnable}
- blog/{keyword}
    params{}
- /portfolio
    params{}
- /portfolio/{gallery-name}
    params{}
- /map
    params{}
- /web-dev

 */
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    SidebarComponent,
    FilmStripComponent,
    MainContainerComponent,
    MainWrapperComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
