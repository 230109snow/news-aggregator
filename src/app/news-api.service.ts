import { Injectable } from '@angular/core';
import { apilayer_key } from 'src/apikeys';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

interface worldNewsAPIsearchNews {
  //display filters
  number : number,
  offset? : number,
  sort : string,
  sort_direction : string,
  //content filters
  text? : string,
  entities? : string,
  min_sentiment? : number, //range: [-1, 1]
  max_sentiment? : number,
  //origin filters
  earliest_publish_date? : string,
  ////latest_publish_date : string,
  authors? : string
  news_sources? : string,
  source_countries? : string,
  language : string,
  ////location_filter={location-filter},

}

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private http : HttpClient) { }

  fmtListParam(str : string) : string {
    // get rid of trailing whitespace:
    let res = str.replace(/\s+$/g, '');
    // replace commas:
    res = res.replace(/\s*,\s*/g, '%2C')
    // replace rest of spaces:
    return res.replace(/\s+/g, '%20');
  }
  getParamString(APIparams : worldNewsAPIsearchNews) : string {
    let paramdict = new Map<string, string>();
    paramdict.set("number", APIparams.number.toString())
    paramdict.set("sort", APIparams.sort)
    paramdict.set("sort-direction", APIparams.sort_direction)
    paramdict.set("language", APIparams.language)
    /* 
    authors, news-sources, source-countries can be comma-seperated list.
    => Must apply fmtListParam before appending!
    */
    if(APIparams.authors) {
      paramdict.set("authors", this.fmtListParam(APIparams.authors));
    }
    if(APIparams.text) {
      paramdict.set("text", APIparams.text);
    }
    if(APIparams.earliest_publish_date) {
      paramdict.set("earliest-publish-date", APIparams.earliest_publish_date);
    }

    let paramString : string = "?";
    paramdict.forEach((val, param) => {
      if( paramString != "?") {paramString += "&";}
      paramString += `${param}=${val}`;
    })
    return paramString;
  }
  //httpget(url : string, )
  
  apilayerurl = 'https://api.apilayer.com/world_news/searchnews';

  getNews_fromAPI(urlparams : string) : Observable<any[]> {
    const apiurl = `${this.apilayerurl}${urlparams}`;
    console.log(apiurl);
    const res : any = this.http.get(apiurl, {
      headers: {
        'apikey': apilayer_key
      }
    });
    return res as Observable<any[]>;
  }

}
