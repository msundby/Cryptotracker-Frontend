import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top50coinsComponent } from './top50coins.component';

describe('Top50coinsComponent', () => {
  let component: Top50coinsComponent;
  let fixture: ComponentFixture<Top50coinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top50coinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top50coinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
