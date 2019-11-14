import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MovieinfoService } from "./movieinfo.service";
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { GridModule } from '@syncfusion/ej2-angular-grids';
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    TreeViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule
  ],
  providers: [MovieinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
