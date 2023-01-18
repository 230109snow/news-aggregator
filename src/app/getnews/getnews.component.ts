import { Component, OnInit } from '@angular/core';
/* import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; */
import { NewsAPIService } from '../news-api.service';

@Component({
  selector: 'app-getnews',
  templateUrl: './getnews.component.html',
  styleUrls: ['./getnews.component.css']
})
export class GetnewsComponent implements OnInit{
  numStories : number = 1;
  //TODO - FIGURE OUT WHY THIS ONLY SETS A DEFAULT VALUE FOR THE FORM WHEN HARD-CODED IN AS A STRING?!?!?!
  publishedAfter : Date | string = "2012-12-10T00:00:01";
  ////new Date().toISOString() 
  ////this.getDatetimeMax();

  constructor(private newsAPI : NewsAPIService) {}

  getDatetimeMax() : Date | string {
    //TODO ideally, this would give the time 1-5 min ago
    const now = new Date();
    return now.toISOString();
  }

  getNews(form : any) : any {
    const retrievalTimestamp : string = Date(); 
    console.log('retrieved', retrievalTimestamp);
    console.log(form);
    this.newsAPI.getNews_fromAPI('/world_news/searchnews');

    console.log(this.getDatetimeMax());
    return false;
  }

  ngOnInit(): void {
    console.log(this.getDatetimeMax());
    /* this.publishedAfter = this.getDatetimeMax(); */
  }
}
