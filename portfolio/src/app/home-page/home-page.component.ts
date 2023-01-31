import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomePageData } from './home-page-data.interface';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  obj: HomePageData;
  subscription$: Subscription;

  constructor(private http: HttpClient, private service: HomePageService) {}

  ngOnInit(): void {
    this.subscription$ = this.service.getHomePageData().subscribe((data) => {
      if (data) {
        this.obj = data;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}

