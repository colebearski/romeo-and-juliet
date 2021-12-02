Iterate with state

1. provide the ngxs package
https://www.ngxs.io/getting-started/installation
`npm install @ngxs/store --save`

2. dont forget to include it in app.module
`import { NgxsModule } from '@ngxs/store';`
`NgxsModule.forRoot([ReviewsState]),`

3. create store directory

4. create actions file

```
export class GetReviews {
    static readonly type = '[Review] GetReviews';
}
```

5. create state file
https://www.ngxs.io/concepts/state

```
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { GetReviews } from './review.actions';
import { tap } from 'rxjs/operators';

export class ReviewStateModel {
	reviews: Review[];
}

@State<ReviewStateModel>({
	name: 'reviews',
	defaults: {
		reviews: []
	}
})

@Injectable()
export class ReviewsState {
    constructor(private reviewService: ReviewService) { }

    @Action(GetReviews)
    getReviews({ patchState }: StateContext<ReviewStateModel>): GetReviews {
        return this.reviewService.getReviews().pipe(tap(reviews => {
            patchState({
                reviews: reviews
            });
        }));
    }
}
```

6. update the reviews component to dispatch our new action

```
 ngOnInit() {
    this.store.dispatch(new GetReviews()).pipe().subscribe((res) => {
      this.reviews$ = res.reviews.reviews;
      this.reviews$.map(rating => {
        this.ratingsArr.push(<never>rating.rating);
        this.sum = this.ratingsArr.reduce((a, b) => a + Math.round(b), 0);
        this.average = Math.round((this.sum / this.ratingsArr.length) * 100) / 100;
      });
    });
  }
  ```

  7. next step, update the handleRatingFilter()


