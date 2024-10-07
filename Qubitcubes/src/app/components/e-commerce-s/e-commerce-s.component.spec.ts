import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceSComponent } from './e-commerce-s.component';

describe('ECommerceSComponent', () => {
  let component: ECommerceSComponent;
  let fixture: ComponentFixture<ECommerceSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ECommerceSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
