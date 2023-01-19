import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private newsAPI : NewsAPIService, private router: Router) {}

  getDatetimeMax() : Date | string {
    //TODO ideally, this would give the time 1-5 min ago
    const now = new Date();
    return now.toISOString();
  }

/*   getNews() : any {
    const retrievalTimestamp : string = Date(); 
    console.log('retrieved', retrievalTimestamp);
    this.newsAPI.getNews_fromAPI();

    return false;
  } */

  gotohelp() : void {
    this.router.navigate(['help']);
  }

  ngOnInit(): void {
    console.log(this.getDatetimeMax());
    /* this.publishedAfter = this.getDatetimeMax(); */
  }
}
