import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAppointmentbydatetimeComponent } from './search-appointmentbydatetime.component';

describe('SearchAppointmentbydatetimeComponent', () => {
  let component: SearchAppointmentbydatetimeComponent;
  let fixture: ComponentFixture<SearchAppointmentbydatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAppointmentbydatetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAppointmentbydatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
