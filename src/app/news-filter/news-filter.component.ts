import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { NewsAPIService } from '../news-api.service';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.css']
})
export class NewsFilterComponent {
  @Output() filterUpdated = new EventEmitter<void>();
  constructor(private newsApi : NewsAPIService) {}

  newsFilterForm : FormGroup = new FormGroup({
    number: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
    authors: new FormControl('', [
      Validators.pattern("^([a-zA-Z]{1,20}\\s*)+(\\s*,\\s*[a-zA-Z]{1,20}\\s*)*")
    ]),
    text: new FormControl('', [Validators.pattern("^(\\w+[\\s.]*)+")]),
    publishedAfter: new FormControl('', [])
  });


  applyFilter() {
    if(this.newsFilterForm.invalid) {
      console.log("Error: invalid form");
      return;
    }
    const filterString : string = this.newsApi.getParamString({
      number : this.newsFilterForm.controls['number'].value,
      sort : 'publish-time',
      sort_direction : 'asc',
      language : 'en',
      authors : this.newsFilterForm.controls['authors'].value,
      text : this.newsFilterForm.controls['text'].value,
      earliest_publish_date : this.newsFilterForm.controls['earliest-publish-date'].value.toISOString()
    })
    console.log(filterString);
    this.newsApi.getNews_fromAPI(filterString).subscribe((newsdat) => {
      console.log(newsdat);
      this.filterUpdated.emit();
    });
  }
}
