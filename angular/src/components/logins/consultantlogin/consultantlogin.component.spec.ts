import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantloginComponent } from './consultantlogin.component';

describe('ConsultantloginComponent', () => {
  let component: ConsultantloginComponent;
  let fixture: ComponentFixture<ConsultantloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
