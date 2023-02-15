import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomePageData } from './home-page-data.model';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private http: HttpClient) {}

  getHomePageData(): Observable<HomePageData> {
    return this.http.get<HomePageData>('/assets/data/home-page-data.json');
  }
}
