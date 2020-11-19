import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartScifiComponent } from './cart-scifi.component';

describe('CartScifiComponent', () => {
  let component: CartScifiComponent;
  let fixture: ComponentFixture<CartScifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartScifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartScifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
