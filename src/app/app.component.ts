import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieinfoService } from "./movieinfo.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{
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
  title = 'Movieinfo';
}

  
