import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentymaintainanceComponent } from './warrentymaintainance.component';

describe('WarrentymaintainanceComponent', () => {
  let component: WarrentymaintainanceComponent;
  let fixture: ComponentFixture<WarrentymaintainanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarrentymaintainanceComponent]
    });
    fixture = TestBed.createComponent(WarrentymaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
