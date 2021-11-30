import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule, MatCardModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { ReviewService } from './services/review.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ReviewsState } from './store/review.state';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReviewsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    NgxsModule.forRoot([ReviewsState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    HttpClientModule,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
