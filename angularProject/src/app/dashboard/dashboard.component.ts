import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    // Lấy movie từ index 1->5
    this.movieService.getMovies().subscribe(movies => this.movies = movies.slice(1, 5))
  }
}
