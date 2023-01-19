import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApphelpComponent } from './apphelp/apphelp.component';
import { GetnewsComponent } from './getnews/getnews.component';
import { NewsFilterComponent } from './news-filter/news-filter.component';

const routes: Routes = [
  {
    path: 'home',
    component: NewsFilterComponent
  },
  {
    path: 'help',
    component: ApphelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
