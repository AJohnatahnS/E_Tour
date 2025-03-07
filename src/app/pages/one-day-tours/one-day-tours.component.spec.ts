import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayToursComponent } from './one-day-tours.component';

describe('OneDayToursComponent', () => {
  let component: OneDayToursComponent;
  let fixture: ComponentFixture<OneDayToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDayToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDayToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
