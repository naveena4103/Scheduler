import { ElementRef } from '@angular/core';

export const calculateModalPosition = (ref: ElementRef, space: number) => {
  const elementPosition = ref.nativeElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  let topPosition: string;
  let bottomPosition: string;
  let rightPosition: string;
  const bottomSpace = space;

  if (windowHeight - elementPosition.top < bottomSpace) {
    bottomPosition = '10px';
  } else {
    topPosition = `${elementPosition.top + 30}px`;
  }

  if (windowWidth - elementPosition.right < space) {
    rightPosition = `${30}px`;
  }
  return {
    topPosition,
    bottomPosition,
    elementPosition,
    rightPosition
  };
};

export const isDarkColor = (color: string) => {
  // Convert hex color to RGB
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  // Calculate perceived brightness using the formula
  // See: https://www.w3.org/TR/AERT/#color-contrast
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness < 128; // Return true if background is dark, false if light
};

export const chooseColor = (color: string) => {
  const isDarkBackground = isDarkColor(color);

  if (isDarkBackground) {
    return '#ffffff';
  } else {
    return '#000000';
  }
};
