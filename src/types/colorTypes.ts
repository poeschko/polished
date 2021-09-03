export interface ContrastScores {
  AA: boolean;
  AALarge: boolean;
  AAA: boolean;
  AAALarge: boolean;
}

export interface HslColor {
  hue: number;
  saturation: number;
  lightness: number;
  [key: string]: number;
}

export interface HslaColor extends HslColor {
  alpha: number;
}

export interface RgbColor {
  red: number;
  green: number;
  blue: number;
  [key: string]: number;
}

export interface RgbaColor extends RgbColor {
  alpha: number;
}
