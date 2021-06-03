import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiKey: string;
  url: string;
  
  constructor(private http: HttpClient) {
    this.apiKey = '34cfff3e',
    this.url = 'http://www.omdbapi.com/?apikey='
    ///this.url2 = 'http://www.omdbapi.com/?t=666&apikey=34cfff3e'
   }

   buscarFilmes(name: string): Promise<any> {
      const filmes = this.http.get(`${this.url}${this.apiKey}&s=${name}&`).toPromise();
      return filmes
    }
    buscarFilme(id: string): Promise<any> {
//      const filme = this.http.get(`${this.url}${this.apiKey}&s=${id}`).toPromise();
      const filme = this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`).toPromise();
      return filme
   }
}

/* http://www.omdbapi.com/?i={id}&apikey=34cfff3e */
