import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeCardsComponent } from './real-time-cards.component';

describe('RealTimeCardsComponent', () => {
  let component: RealTimeCardsComponent;
  let fixture: ComponentFixture<RealTimeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealTimeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
