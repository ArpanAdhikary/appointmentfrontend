import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUserHomepageComponent } from './registered-user-homepage.component';

describe('RegisteredUserHomepageComponent', () => {
  let component: RegisteredUserHomepageComponent;
  let fixture: ComponentFixture<RegisteredUserHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredUserHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredUserHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
