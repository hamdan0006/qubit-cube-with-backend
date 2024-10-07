import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesComponent } from './web-des.component';

describe('WebDesComponent', () => {
  let component: WebDesComponent;
  let fixture: ComponentFixture<WebDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
