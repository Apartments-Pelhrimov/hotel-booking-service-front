export enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum ButtonVariant {
  FILLED = 'filled',
  OUTLINE = 'outline',
}

export enum ButtonState {
  DEFAULT = 'default',
  HOVER = 'hover',
  ACTIVE = 'active',
  FOCUSED = 'focused',
  DISABLED = 'disabled',
}

interface ButtonColors {
  backgroundColor: string[];
  borderColor: string[];
  textColor: string[];
  textColorDisabled: string;
}

export type ButtonColorsMap = {
  [key in ButtonVariant]: ButtonColors;
};
