import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFromComponent } from './profile-from.component';

describe('ProfileFromComponent', () => {
  let component: ProfileFromComponent;
  let fixture: ComponentFixture<ProfileFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
