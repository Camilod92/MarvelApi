import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonajesApiService {
  PUBLIC_KEY='5aed38a49166a0b119e1d8006373ec2e';
  HASH='ae9fa52ae575b1def3b4236643bc313e';
  URL_API=`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http:HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any)=>data.data.results))
  }
}
