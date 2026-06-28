import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'

import { inHslToRgb } from './inHslToRgb'
import { inRgbToHsv } from './inRgbToHsv'

export function inHslToHsv(hsl: Hsl): Hsv {
  return inRgbToHsv(inHslToRgb(hsl))
}
