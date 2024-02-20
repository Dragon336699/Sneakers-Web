import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayNamComponent } from './giay-nam.component';

describe('GiayNamComponent', () => {
  let component: GiayNamComponent;
  let fixture: ComponentFixture<GiayNamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiayNamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiayNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
