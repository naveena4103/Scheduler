import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
const defaultColors = [
  '#aa2e25',
  '#ff9800',
  '#ffeb3b',
  '#cddc39',
  '#795548',
  '#03a9f4',
  '#00bcd4',
  '#357a38',
  '#67ba37',
  '#000000',
  '#607d8b',
  '#c6c6c6',
  '#FF3535',
  '#ffffff'
];

@Component({
  selector: 'app-color-picker-custom',
  templateUrl: './color-picker-custom.component.html',
  styleUrls: ['./color-picker-custom.component.scss']
})
export class ColorPickerCustomComponent implements OnInit {
  @Input() colors = defaultColors;
  @Input() selectedColor;
  @Input() indexToEdit: number;
  @Output() selectColor = new EventEmitter<{
    color: string;
    indexToEdit?: number;
  }>();

  constructor() {}

  ngOnInit(): void {}
  selectColour(color: string) {
    this.selectColor.emit({ color, indexToEdit: this.indexToEdit });
  }
  isCustomColor = () => {
    if (!this.selectedColor) return false;
    return !this.colors.find((col) => col === this.selectedColor);
  };
  onColorChange(e) {
    this.selectColor.emit({
      color: e.target.value,
      indexToEdit: this.indexToEdit
    });
  }
}
