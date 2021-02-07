import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyUserHomepageComponent } from './readonly-user-homepage.component';

describe('ReadonlyUserHomepageComponent', () => {
  let component: ReadonlyUserHomepageComponent;
  let fixture: ComponentFixture<ReadonlyUserHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyUserHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyUserHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
