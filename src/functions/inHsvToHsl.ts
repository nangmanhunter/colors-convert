import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'

import { inHsvToRgb } from './inHsvToRgb'
import { inRgbToHsl } from './inRgbToHsl'

export function inHsvToHsl(hsv: Hsv): Hsl {
  return inRgbToHsl(inHsvToRgb(hsv))
}
