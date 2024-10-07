import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhattsappIconComponent } from './whattsapp-icon.component';

describe('WhattsappIconComponent', () => {
  let component: WhattsappIconComponent;
  let fixture: ComponentFixture<WhattsappIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhattsappIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhattsappIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
