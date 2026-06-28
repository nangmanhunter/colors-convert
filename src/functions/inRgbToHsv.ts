import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'


export function inRgbToHsv(rgb: Rgb): Hsv {
  // 1. 0~255 스케일을 0~1 실수 범위로 압축
  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h = 0
  const s = max === 0 ? 0 : delta / max
  const v = max

  // 2. 어떤 색이 가장 지배적인가에 따라 색상 각도(H) 계산 (수학적 선형 보간)
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) + (g < b ? 6 : 0)
    } else if (max === g) {
      h = ((b - r) / delta) + 2
    } else if (max === b) {
      h = ((r - g) / delta) + 4
    }
    h = h * 60 // 육각뿔의 60도 구역 매핑
  }

  return {
    // 소수점 오차 검증을 정밀하게 하기 위해, 각도는 정수로, 비율은 소수점 4자리까지 보존
    h: Math.round(h),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  }
}
