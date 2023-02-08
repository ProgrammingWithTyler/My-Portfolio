import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageService } from './shared/services/home-page.service';
import { SkillsService } from './shared/services/skills.service';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SkillsComponent,
    FooterComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomePageService,
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
