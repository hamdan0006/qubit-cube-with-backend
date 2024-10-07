import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDevComponent } from './desktop-dev.component';

describe('DesktopDevComponent', () => {
  let component: DesktopDevComponent;
  let fixture: ComponentFixture<DesktopDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
