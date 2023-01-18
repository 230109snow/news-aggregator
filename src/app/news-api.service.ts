import { Injectable } from '@angular/core';
import { apilayer_key } from 'src/apikeys';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private http : HttpClient) { }

  apilayerurl = 'https://api.apilayer.com';

  getNews_fromAPI(urlext : string) : any {
    const apiurl = `${this.apilayerurl}${urlext}`;
    console.log(apiurl);
  }
  // have this take arg for which api to use?
  /* getNews_fromAPI(urlext : string) : Observable<any[]> {
    const apiurl = `${this.apilayerurl}${urlext}`;
    console.log(apiurl);
    const res : any = this.http.get(apiurl, {
      headers: {
        'apikey': apilayer_key
      }
    });
    return res as Observable<any[]>;
  } */

/*   getNews2() : any {
    this.getNews().subscribe({
      next: {
        console.log("getNews2 ran");
      }
    })
    } */

}
