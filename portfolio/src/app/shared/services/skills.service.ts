import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkillsPageData } from '../interfaces/skills-page-data.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url = 'assets/data/skills-page-data.json';

  constructor(private http: HttpClient) { }

  getMostRelevantSkills(): Observable<SkillsPageData[]> {
    return this.http.get<SkillsPageData[]>(this.url)
      .pipe(
        map(data => data.filter(obj => obj.isRelevant))
      );
  }

  getLanguagesSkills(): Observable<SkillsPageData[]> {
    return this.http.get<SkillsPageData[]>(this.url)
      .pipe(
        map(data => data.filter(obj => obj.type === 'language'))
      );
  }

  getLFrameworkSkills(): Observable<SkillsPageData[]> {
    return this.http.get<SkillsPageData[]>(this.url)
      .pipe(
        map(data => data.filter(obj => obj.type === 'framework'))
      );
  }

  getLToolSkills(): Observable<SkillsPageData[]> {
    return this.http.get<SkillsPageData[]>(this.url)
      .pipe(
        map(data => data.filter(obj => obj.type === 'tool'))
      );
  }
}
