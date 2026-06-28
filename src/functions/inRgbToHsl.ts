import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'


export function inRgbToHsl(rgb: Rgb): Hsl {
  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h = 0
  // 밝기(L)는 최대 광도와 최소 광도의 정중앙 평균값
  const l = (max + min) / 2
  let s = 0

  if (delta !== 0) {
    // 밝기가 0.5를 기준으로 완전 백색 혹은 완전 흑색으로 치우침에 따라 채도 분모 분할
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min)

    if (max === r) {
      h = ((g - b) / delta) + (g < b ? 6 : 0)
    } else if (max === g) {
      h = ((b - r) / delta) + 2
    } else if (max === b) {
      h = ((r - g) / delta) + 4
    }
    h = h * 60
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  }
}
