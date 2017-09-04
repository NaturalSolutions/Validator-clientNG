import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPoiComponent } from './filter-poi.component';

describe('FilterPoiComponent', () => {
  let component: FilterPoiComponent;
  let fixture: ComponentFixture<FilterPoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
