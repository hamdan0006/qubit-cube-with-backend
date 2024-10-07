import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarkComponent } from './digital-mark.component';

describe('DigitalMarkComponent', () => {
  let component: DigitalMarkComponent;
  let fixture: ComponentFixture<DigitalMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
