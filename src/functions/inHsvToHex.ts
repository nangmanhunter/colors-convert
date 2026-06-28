import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'

import { inHsvToRgb } from './inHsvToRgb'
import { inRgbToHex } from './inRgbToHex'

export function inHsvToHex(hsv: Hsv): Hex {
  return inRgbToHex(inHsvToRgb(hsv))
}
