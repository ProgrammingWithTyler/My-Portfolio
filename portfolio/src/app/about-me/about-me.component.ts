import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AboutMeData } from '../shared/interfaces/about-me-data.interface';
import { AboutMeService } from '../shared/services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe$: Observable<AboutMeData>;

  constructor(private readonly aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.aboutMe$ = this.aboutMeService.getAboutMeData();
  }

}
