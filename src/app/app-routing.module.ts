import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BrowseComponent } from './browse/browse.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [ 
  {path:"moviedetails", component:MovieDetailsComponent}, 
  {path:"browse", component:BrowseComponent},
  {path:"list", component:ListComponent} 
];
@NgModule({  
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 

})
export class AppRoutingModule { }
export const RoutingComponent = [MovieDetailsComponent,BrowseComponent,ListComponent];