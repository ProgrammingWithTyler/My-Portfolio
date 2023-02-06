import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsService } from '../shared/services/skills.service';
import { SkillsPageData } from '../shared/interfaces/skills-page-data.interface';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  obj: SkillsPageData[];
  relevantSkills$: Observable<SkillsPageData[]>;
  progLang$: Observable<SkillsPageData[]>;
  frameworks$: Observable<SkillsPageData[]>;
  tools$: Observable<SkillsPageData[]>;


  constructor(private service: SkillsService) { }

  ngOnInit(): void {
    this.relevantSkills$ = this.service.getMostRelevantSkills();
    this.progLang$ = this.service.getLanguagesSkills();
    this.frameworks$ = this.service.getLFrameworkSkills();
    this.tools$ = this.service.getLToolSkills();
  }

}
