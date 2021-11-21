import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the text - Shakespeare - Romeo and Juliet Reviews', () => {
    const title = fixture.debugElement.query(By.css('.shakespeare'));
    expect(title.nativeElement.innerHTML).toContain('Shakespeare - Romeo and Juliet Reviews')
  })
});
