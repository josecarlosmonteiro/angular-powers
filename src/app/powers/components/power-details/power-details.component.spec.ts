import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerDetailsComponent } from './power-details.component';

describe('PowerDetailsComponent', () => {
  let component: PowerDetailsComponent;
  let fixture: ComponentFixture<PowerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
