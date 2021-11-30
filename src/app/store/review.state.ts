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