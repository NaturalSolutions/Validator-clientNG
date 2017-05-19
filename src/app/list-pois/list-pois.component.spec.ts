import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPoisComponent } from './list-pois.component';

describe('ListPoisComponent', () => {
  let component: ListPoisComponent;
  let fixture: ComponentFixture<ListPoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
