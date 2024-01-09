import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsidemaintainanceComponent } from './outsidemaintainance.component';

describe('OutsidemaintainanceComponent', () => {
  let component: OutsidemaintainanceComponent;
  let fixture: ComponentFixture<OutsidemaintainanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutsidemaintainanceComponent]
    });
    fixture = TestBed.createComponent(OutsidemaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
