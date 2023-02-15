import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectsPageData } from './projects-page-data.model';
import { ProjectsPageService } from './projects-page.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<ProjectsPageData[]>;
  obj: ProjectsPageData[];

  constructor(private readonly service: ProjectsPageService) {}

  ngOnInit(): void {
    this.projects$ = this.service.getProjectPageData();
  }
}
