import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartThrillerComponent } from './cart-thriller.component';

describe('CartThrillerComponent', () => {
  let component: CartThrillerComponent;
  let fixture: ComponentFixture<CartThrillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartThrillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartThrillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
