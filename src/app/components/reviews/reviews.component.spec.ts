import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule, MatCardModule, MatDividerModule, MatIconModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReviewService } from 'src/app/services/review.service';

import { ReviewsComponent } from './reviews.component';

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsComponent ],
      imports: [ 
        HttpClientModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        NgxPaginationModule
      ],
      providers: [ 
        HttpClient,
        ReviewService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
