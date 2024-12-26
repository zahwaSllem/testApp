import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLoveComponent } from './our-love.component';

describe('OurLoveComponent', () => {
  let component: OurLoveComponent;
  let fixture: ComponentFixture<OurLoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurLoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
