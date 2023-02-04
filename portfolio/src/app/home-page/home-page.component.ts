import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SkillsPageData } from '../skills/skills-page-data.interface';
import { SkillsService } from '../skills/skills.service';
import { HomePageData } from './home-page-data.interface';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  obj: HomePageData;
  obs$: Observable<HomePageData>;
  relevantSkills$: Observable<SkillsPageData[]>;

  constructor(private homePageService: HomePageService, private skillsPageService: SkillsService) { }

  ngOnInit(): void {
    this.obs$ = this.homePageService.getHomePageData();
    this.relevantSkills$ = this.skillsPageService.getMostRelevantSkills();
  }

}

