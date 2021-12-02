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
  search: any;

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

  handleSearch(body) {
    body = body.toUpperCase();
    // console.log('hit', body.charAt(0).toUpperCase());
    this.reviewService.getReviews().subscribe((res: Review[]) => {
      let searchResults = res.filter((review) => {
        // body.charAt(0).toUpperCase();
        let newAuthor = review.author.toUpperCase();
        return newAuthor.includes(body);
      })

      this.reviews$ = searchResults;
    })
  }

  // Hey Cole,

  // I wanted to touch base as soon as I got the feedback from our teams. 
  // First, thanks for taking time to meet with some of them this week and for completing the code challenge. 
  // However, please know this was not an easy decision, but we ended up moving forward with another candidate.

  // Some concerns were around your technical interview. 
  // One thing the team was hoping to see was stronger experience in Angular as a whole. 
  // The team mentioned that it took a bit longer to refactor than expected for a sr. level candidate 
  // and that it took equally as long to get the component state and handlers hooked up. 
  // Thanks again for talking to our team and giving us the opportunity to learn about your skills and accomplishments Cole. 
  // We'll be posting more positions in the coming months and hope you’ll keep us in mind then, we encourage you to apply again. 
  // All the best to you and happy holidays.

}
