import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOfficeDevicesComponent } from './show-office-devices.component';

describe('ShowOfficeDevicesComponent', () => {
  let component: ShowOfficeDevicesComponent;
  let fixture: ComponentFixture<ShowOfficeDevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOfficeDevicesComponent]
    });
    fixture = TestBed.createComponent(ShowOfficeDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
