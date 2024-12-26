import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPowredComponent } from './ai-powred.component';

describe('AiPowredComponent', () => {
  let component: AiPowredComponent;
  let fixture: ComponentFixture<AiPowredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPowredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiPowredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
