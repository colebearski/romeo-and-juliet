import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews$: Review[];
  p: number = 1;
  ratingsArr: [] = [];
  sum: number;
  average: number;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews().subscribe((res: Review[]) => {
      this.reviews$ = res;

      this.reviews$.map(rating => {
        this.ratingsArr.push(<never>rating.rating);
        this.sum = this.ratingsArr.reduce((a, b) => a + Math.round(b), 0);
        this.average = Math.round((this.sum / this.ratingsArr.length) * 100) / 100;
      });
    });
  }

  handleRatingFilter(ratingScore) {
    this.reviewService.getReviews().subscribe((res: Review[]) => {
      let filterResults = res.filter((review) => {
        return review.rating >= ratingScore && review.rating < parseInt(ratingScore) + parseInt('1');
      })

      if (ratingScore === 'clear') {
        this.reviews$ = res;
      } else {
        this.reviews$ = filterResults;
      }
    })
  }
}
