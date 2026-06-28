import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'
import { inHexToRgb } from './inHexToRgb'
import { inRgbToHsv } from './inRgbToHsv'

export function inHexToHsv(hex: Hex): Hsv {
  return inRgbToHsv(inHexToRgb(hex))
}
