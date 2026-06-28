import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'
import { inHexToRgb } from './inHexToRgb'
import { inRgbToHsl } from './inRgbToHsl'

export function inHexToHsl(hex: Hex): Hsl {
  return inRgbToHsl(inHexToRgb(hex))
}
