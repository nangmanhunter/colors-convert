import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'



export function inRgbToHex(rgb: Rgb): Hex {
  const { r, g, b } = rgb

  // 0~255 범위를 벗어나는 바보 같은 유입 차단 (런타임 안전장치)
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)))

  const rHex = clamp(r).toString(16).padStart(2, '0')
  const gHex = clamp(g).toString(16).padStart(2, '0')
  const bHex = clamp(b).toString(16).padStart(2, '0')

  // 대문자로 정렬하여 엄격한 Hex 타입으로 강제 변환(Type Assertion)
  return `#${rHex}${gHex}${bHex}`.toUpperCase() as Hex
}
