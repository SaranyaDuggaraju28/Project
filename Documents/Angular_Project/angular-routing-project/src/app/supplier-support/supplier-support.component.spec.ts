import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSupportComponent } from './supplier-support.component';

describe('SupplierSupportComponent', () => {
  let component: SupplierSupportComponent;
  let fixture: ComponentFixture<SupplierSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
