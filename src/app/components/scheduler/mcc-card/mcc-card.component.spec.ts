import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MccCardComponent } from './mcc-card.component';

describe('MccCardComponent', () => {
  let component: MccCardComponent;
  let fixture: ComponentFixture<MccCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MccCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MccCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
