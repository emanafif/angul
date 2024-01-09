import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToOutsideMaintainanceComponent } from './add-to-outside-maintainance.component';

describe('AddToOutsideMaintainanceComponent', () => {
  let component: AddToOutsideMaintainanceComponent;
  let fixture: ComponentFixture<AddToOutsideMaintainanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToOutsideMaintainanceComponent]
    });
    fixture = TestBed.createComponent(AddToOutsideMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
