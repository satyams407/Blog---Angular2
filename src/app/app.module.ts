import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BlogfeedsComponent} from './blogfeeds/blogfeeds.component';
import {BlogfeedsService} from "./blogfeeds/blogfeeds.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './navbar/login/login.component';
import {AuthenticationService} from './navbar/login/authentication.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyblogsComponent} from './myblogs/myblogs.component';
import {PostblogComponent} from './postblog/postblog.component'
import {HttpModule} from "@angular/http";
import {TruncatePipe} from "./Shared/TruncatePipe";
import {BlogdetailsComponent} from './blogfeeds/blogdetails/blogdetails.component';
import {AboutusComponent} from './navbar/aboutus/aboutus.component';
import { FavoritesblogComponent } from './favoritesblog/favoritesblog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogfeedsComponent,
    LoginComponent,
    DashboardComponent,
    MyblogsComponent,
    PostblogComponent,
    TruncatePipe,
    BlogdetailsComponent,
    AboutusComponent,
    FavoritesblogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'signin', component: LoginComponent},
      {path: 'welcome', component: BlogfeedsComponent},
      {path: 'welcome/:id', component: BlogdetailsComponent},
      {path: 'dashboard/:id', component: DashboardComponent},
      {path: 'dashboard/:postedby/:id', component: BlogdetailsComponent},
      {path: 'dashboard/:postedby/:id/edit', component: PostblogComponent},
      {path: 'dashboard/create', component: PostblogComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],

  providers: [BlogfeedsService, AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
