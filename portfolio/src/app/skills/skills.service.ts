import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkillsPageData } from './skills-page-data.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  url = 'assets/data/skills-page-data.json';

  constructor(private http: HttpClient) {}

  getMostRelevantSkills(): Observable<SkillsPageData[]> {
    return this.http
      .get<SkillsPageData[]>(this.url)
      .pipe(
        map((data) =>
          data.filter((obj) => obj.isRelevant).sort((a, b) => a.rank - b.rank)
        )
      );
  }

  getLanguagesSkills(): Observable<SkillsPageData[]> {
    return this.http
      .get<SkillsPageData[]>(this.url)
      .pipe(
        map((data) =>
          data
            .filter((obj) => obj.type === 'languages')
            .sort((a, b) => a.rank - b.rank)
        )
      );
  }

  getLFrameworkSkills(): Observable<SkillsPageData[]> {
    return this.http
      .get<SkillsPageData[]>(this.url)
      .pipe(
        map((data) =>
          data
            .filter((obj) => obj.type === 'frameworks')
            .sort((a, b) => a.rank - b.rank)
        )
      );
  }

  getLToolSkills(): Observable<SkillsPageData[]> {
    return this.http
      .get<SkillsPageData[]>(this.url)
      .pipe(
        map((data) =>
          data
            .filter((obj) => obj.type === 'tools')
            .sort((a, b) => a.rank - b.rank)
        )
      );
  }
}
