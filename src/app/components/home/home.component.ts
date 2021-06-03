import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Movie } from '../models/movie.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  //movies: any[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  async getFilme(event: any) {
    try {
      const movie = event.target.value;
      this.homeService.buscarFilmes(movie).then( res => {
        this.movies = res.Search;
        console.log(res)
      })
    }catch(e) {
      console.log(e)
    }
    }

}
