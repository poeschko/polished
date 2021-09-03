// @flow
import type { SideKeywords } from './sideKeywords';

export interface TriangleConfiguration {
  backgroundColor?: string;
  foregroundColor: string;
  height: number | string;
  width: number | string;
  pointingDirection: SideKeywords;
}
