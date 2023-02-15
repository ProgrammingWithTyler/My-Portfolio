import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsPageData } from './skills-page-data.model';
import { SkillsService } from './skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  obj: SkillsPageData[];
  relevantSkills$: Observable<SkillsPageData[]>;
  progLang$: Observable<SkillsPageData[]>;
  frameworks$: Observable<SkillsPageData[]>;
  tools$: Observable<SkillsPageData[]>;

  constructor(private readonly service: SkillsService) {}

  ngOnInit(): void {
    this.relevantSkills$ = this.service.getMostRelevantSkills();
    this.progLang$ = this.service.getLanguagesSkills();
    this.frameworks$ = this.service.getLFrameworkSkills();
    this.tools$ = this.service.getLToolSkills();
  }
}
