import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUxComponent } from './ui-ux.component';

describe('UIUxComponent', () => {
  let component: UIUxComponent;
  let fixture: ComponentFixture<UIUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIUxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UIUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
