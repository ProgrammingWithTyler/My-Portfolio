import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationsPageData } from '../shared/interfaces/RecommendationsPageData.interface';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  gist$: Observable<RecommendationsPageData[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.gist$ = this.http.get<RecommendationsPageData[]>(
      '/assets/data/recommendations-page-data.json'
    );
  }
}
