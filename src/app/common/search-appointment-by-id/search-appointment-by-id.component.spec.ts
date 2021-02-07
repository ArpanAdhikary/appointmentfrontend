import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAppointmentByIdComponent } from './search-appointment-by-id.component';

describe('SearchAppointmentByIdComponent', () => {
  let component: SearchAppointmentByIdComponent;
  let fixture: ComponentFixture<SearchAppointmentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAppointmentByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAppointmentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
