import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProjectsPageData } from '../projects/projects-page-data.model';
import { ProjectsPageService } from '../projects/projects-page.service';
import { SkillsPageData } from '../skills/skills-page-data.model';
import { SkillsService } from '../skills/skills.service';
import { HomePageData } from './home-page-data.model';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  obj: HomePageData;
  obs$: Observable<HomePageData>;
  latestProjects$: Observable<ProjectsPageData[]>;
  relevantSkills$: Observable<SkillsPageData[]>;

  constructor(
    private readonly homePageService: HomePageService,
    private readonly projectPageService: ProjectsPageService,
    private readonly skillsPageService: SkillsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.obs$ = this.homePageService.getHomePageData();
    this.latestProjects$ = this.projectPageService.getLatest3Projects();
    this.relevantSkills$ = this.skillsPageService.getMostRelevantSkills();
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
