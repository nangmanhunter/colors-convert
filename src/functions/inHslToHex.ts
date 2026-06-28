import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'
import { inHslToRgb } from './inHslToRgb'
import { inRgbToHex } from './inRgbToHex'

export function inHslToHex(hsl: Hsl): Hex {
  return inRgbToHex(inHslToRgb(hsl))
}
