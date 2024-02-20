import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreEmComponent } from './tre-em.component';

describe('TreEmComponent', () => {
  let component: TreEmComponent;
  let fixture: ComponentFixture<TreEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreEmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
