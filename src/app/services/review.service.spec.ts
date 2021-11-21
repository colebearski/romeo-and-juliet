import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ReviewService } from './review.service';

describe('ReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ HttpClient ]
  }));

  it('should be created', () => {
    const service: ReviewService = TestBed.get(ReviewService);
    expect(service).toBeTruthy();
  });

  it('should fetch reviews', () => {
    const baseUrl = 'https://shakespeare.podium.com/api/reviews';

    const spy = jasmine.createSpyObj('HttpClient', ['get']);
    const expected = of([]);
    spy.get.and.returnValue(expected);
    
    TestBed.overrideProvider(HttpClient, { useValue: spy });

    const service: ReviewService = TestBed.get(ReviewService);
    const actual = service.getReviews();

    expect(actual).toBe(expected, 'should return response');
    expect(spy.get.calls.count()).toBe(1, 'spy method should be called once');
    expect(baseUrl).toBe(spy.get.calls.first().args[0], 'should call spy with correct URL');
  });
});
