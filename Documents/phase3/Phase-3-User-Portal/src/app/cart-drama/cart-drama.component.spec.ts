import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDramaComponent } from './cart-drama.component';

describe('CartDramaComponent', () => {
  let component: CartDramaComponent;
  let fixture: ComponentFixture<CartDramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
