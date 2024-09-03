import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremPicsumComponent } from './lorem-picsum.component';

describe('LoremPicsumComponent', () => {
  let component: LoremPicsumComponent;
  let fixture: ComponentFixture<LoremPicsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremPicsumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoremPicsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
