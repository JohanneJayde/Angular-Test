import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCeoApiComponent } from './dog-ceo-api.component';

describe('DogCeoApiComponent', () => {
  let component: DogCeoApiComponent;
  let fixture: ComponentFixture<DogCeoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogCeoApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogCeoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
