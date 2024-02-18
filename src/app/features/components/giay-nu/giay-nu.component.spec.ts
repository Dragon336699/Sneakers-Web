import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayNuComponent } from './giay-nu.component';

describe('GiayNuComponent', () => {
  let component: GiayNuComponent;
  let fixture: ComponentFixture<GiayNuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiayNuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiayNuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
