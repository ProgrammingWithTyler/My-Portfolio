import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  // { path: 'projects', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: HomePageComponent, redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
