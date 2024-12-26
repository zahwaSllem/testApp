import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopelarTopComponent } from './popelar-top.component';

describe('PopelarTopComponent', () => {
  let component: PopelarTopComponent;
  let fixture: ComponentFixture<PopelarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopelarTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopelarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
