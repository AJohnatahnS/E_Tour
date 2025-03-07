import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyDaysToursComponent } from './many-days-tours.component';

describe('ManyDaysToursComponent', () => {
  let component: ManyDaysToursComponent;
  let fixture: ComponentFixture<ManyDaysToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManyDaysToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManyDaysToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
