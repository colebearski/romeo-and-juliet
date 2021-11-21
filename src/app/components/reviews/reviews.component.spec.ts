import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule, MatCardModule, MatDividerModule, MatIconModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { By } from '@angular/platform-browser';
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

  it('should render the text - Average Rating for Romeo and Juliet', () => {
    const aggregate = fixture.debugElement.query(By.css('.aggregate-rating'));
    expect(aggregate.nativeElement.innerHTML).toContain('Average Rating for Romeo and Juliet');
  })

  it('should render the text - Filter Ratings', () => {
    const filter = fixture.debugElement.query(By.css('.filter-rating'));
    expect(filter.nativeElement.innerHTML).toContain('Filter Ratings');
  })

  it('should create the paginator', () => {
    const paginator = fixture.debugElement.query(By.css('.paginator'));
    expect(paginator).toBeTruthy();
  })
});
