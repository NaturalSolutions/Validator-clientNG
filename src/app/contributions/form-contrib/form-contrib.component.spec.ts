import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContribComponent } from './form-contrib.component';

describe('FormContribComponent', () => {
  let component: FormContribComponent;
  let fixture: ComponentFixture<FormContribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
