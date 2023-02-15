import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { ProjectsPageData } from './projects-page-data.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsPageService {
  url = '/assets/data/projects-page-data.json';

  constructor(private readonly http: HttpClient) {}

  getProjectPageData(): Observable<ProjectsPageData[]> {
    return this.http.get<ProjectsPageData[]>(this.url).pipe(
      take(1),
      map((data) => {
        // Sort projects by id in descending order
        data.sort((a, b) => b.id - a.id);
        return data;
      })
    );
  }

  getLatest3Projects(): Observable<ProjectsPageData[]> {
    return this.http.get<ProjectsPageData[]>(this.url).pipe(
      take(1),
      map((data) => {
        data.sort((a, b) => b.id - a.id);
        // Return the first three projects
        return data.slice(0, 3);
      })
    );
  }

  getNotableProjects(): Observable<ProjectsPageData[]> {
    return this.http
      .get<ProjectsPageData[]>(this.url)
      .pipe(map((data) => data.filter((obj) => obj.isNotable)));
  }
}
