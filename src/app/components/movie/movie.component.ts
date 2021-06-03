import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private homeService: HomeService) { }

  movie: Movie = new Movie;

  async ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id)
    try {
      const req: any = await this.homeService.buscarFilme(this.activatedRoute.snapshot.params.id);
      if(req.Response == 'True') {
        this.movie = req;
      }
      console.log(req)
      
    } catch (e) {
      console.log(e)
    }
  }
/*
getRatingIcon(source: string) {
  const dict: any  = {
    "Internet Movie Database": 'https://yts.mx/assets/images/website/logo-imdb.svg',
    "Rotten Tomatoes": "https://yts.mx/assets/images/website/rt-upright.png",
    "Metacritic": "https://upload.wikimedia.org/wikipedia.commons/thumb/c/ce/Metacritic_logo_original.svg/1200px-Metacritic_logo_original.svg.png"
  };
  return dict[source];
}
*/

}
