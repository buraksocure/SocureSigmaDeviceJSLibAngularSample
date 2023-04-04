import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocureDeviceRiskComponent } from './socure-device-risk.component';

describe('SocureDeviceRiskComponent', () => {
  let component: SocureDeviceRiskComponent;
  let fixture: ComponentFixture<SocureDeviceRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocureDeviceRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocureDeviceRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
