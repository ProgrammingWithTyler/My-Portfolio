import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationsPageData } from './RecommendationsPageData.model';

@Injectable({
  providedIn: 'root',
})
export class RecommendationsService {
  constructor(private http: HttpClient) {}

  getRecommendationsPageData(): Observable<RecommendationsPageData[]> {
    return this.http.get<RecommendationsPageData[]>(
      '/assets/data/recommendations-page-data.json'
    );
  }
}
