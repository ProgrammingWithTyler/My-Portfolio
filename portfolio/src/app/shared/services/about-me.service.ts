import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMeData } from '../interfaces/about-me-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private http: HttpClient) { }

  getAboutMeData(): Observable<AboutMeData> {
    return this.http.get<AboutMeData>('/assets/data/about-me-page-data.json');
  }
}
