import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl = 'https://shakespeare.podium.com/api/reviews'
  authToken = 'H3TM28wjL8R4#HTnqk?c';
  header = new HttpHeaders()
    .set('x-api-key', this.authToken);
  review: Review[];

  constructor(private http: HttpClient) { }

  getReviews() {
    return this.http.get<Review[]>(this.baseUrl, {'headers': this.header});
  }

  getReview(reviewId: string) {
    return this.http.get<Review[]>(this.baseUrl + reviewId, {'headers': this.header});
  }
}
