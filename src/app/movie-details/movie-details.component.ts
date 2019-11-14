import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieinfoService } from '../movieinfo.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movies = [];
  public errorMsg :string;
  private httpSubscription : Subscription;
  constructor(private http : MovieinfoService){}
  ngOnInit(){
this.httpSubscription=this.http.getEmployees().subscribe(data => this.movies = data,
  error => this.errorMsg = error)

  }
  ngOnDestroy(){
this.httpSubscription.unsubscribe();


  }

}
