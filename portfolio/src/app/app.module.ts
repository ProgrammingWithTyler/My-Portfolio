import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageService } from './home-page/home-page.service';
import { SkillsService } from './skills/skills.service';
import { AboutMeComponent } from './about-me/about-me.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecommendationsService } from './recommendations/recommendations.service';
import { ProjectsPageService } from './projects/projects-page.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SkillsComponent,
    FooterComponent,
    AboutMeComponent,
    RecommendationsComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    HomePageService,
    SkillsService,
    RecommendationsService,
    ProjectsPageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
