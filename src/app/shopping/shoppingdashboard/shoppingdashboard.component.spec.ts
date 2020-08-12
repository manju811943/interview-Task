import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingdashboardComponent } from './shoppingdashboard.component';

describe('ShoppingdashboardComponent', () => {
  let component: ShoppingdashboardComponent;
  let fixture: ComponentFixture<ShoppingdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
