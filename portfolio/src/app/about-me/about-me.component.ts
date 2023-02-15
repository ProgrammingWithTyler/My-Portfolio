import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectsPageData } from '../projects/projects-page-data.model';
import { ProjectsPageService } from '../projects/projects-page.service';
import { AboutMeData } from './about-me-data.model';
import { AboutMeService } from './about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  aboutMe$: Observable<AboutMeData>;
  notableProjects$: Observable<ProjectsPageData[]>;

  constructor(
    private readonly aboutMeService: AboutMeService,
    private readonly projectsPageService: ProjectsPageService
  ) {}

  ngOnInit(): void {
    this.aboutMe$ = this.aboutMeService.getAboutMeData();
    this.notableProjects$ = this.projectsPageService.getNotableProjects();
  }
}
