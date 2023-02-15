import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationsService } from './recommendations.service';
import { RecommendationsPageData } from './RecommendationsPageData.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  gist$: Observable<RecommendationsPageData[]>;

  constructor(private readonly service: RecommendationsService) {}

  ngOnInit(): void {
    this.gist$ = this.service.getRecommendationsPageData();
  }
}
