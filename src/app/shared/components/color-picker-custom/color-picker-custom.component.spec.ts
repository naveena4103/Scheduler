import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerCustomComponent } from './color-picker-custom.component';

describe('ColorPickerCustomComponent', () => {
  let component: ColorPickerCustomComponent;
  let fixture: ComponentFixture<ColorPickerCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
