import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SkillsPageData } from '../shared/interfaces/skills-page-data.interface';
import { SkillsService } from '../shared/services/skills.service';
import { HomePageData } from '../shared/interfaces/home-page-data.interface';
import { HomePageService } from '../shared/services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  obj: HomePageData;
  obs$: Observable<HomePageData>;
  relevantSkills$: Observable<SkillsPageData[]>;

  constructor(private readonly homePageService: HomePageService, private readonly skillsPageService: SkillsService) { }

  ngOnInit(): void {
    this.obs$ = this.homePageService.getHomePageData();
    this.relevantSkills$ = this.skillsPageService.getMostRelevantSkills();
  }

}

