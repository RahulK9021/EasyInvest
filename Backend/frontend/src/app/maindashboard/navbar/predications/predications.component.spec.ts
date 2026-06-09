import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicationsComponent } from './predications.component';

describe('PredicationsComponent', () => {
  let component: PredicationsComponent;
  let fixture: ComponentFixture<PredicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
