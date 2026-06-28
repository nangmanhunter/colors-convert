import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'



export function inHslToRgb(hsl: Hsl): Rgb {
  const { h, s, l } = hsl

  // 채도가 0이면 명도(L) 자체가 곧 R, G, B가 되는 완전한 무채색(회색) 평면
  if (s === 0) {
    const val = Math.round(l * 255)
    return { r: val, g: val, b: val }
  }

  // 쌍원뿔 기하학에서 현재 명도(L) 대비 가질 수 있는 최대 색상 진함(Chroma) 역산
  const chroma = (1 - Math.abs(2 * l - 1)) * s
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - chroma / 2 // 명도 보정을 위한 바닥값(Match)

  let r = 0, g = 0, b = 0

  // 60도 간격의 색상환 영역에 따른 RGB 비율 분배
  if (0 <= h && h < 60) { r = chroma; g = x; b = 0 } else if (60 <= h && h < 120) { r = x; g = chroma; b = 0 } else if (120 <= h && h < 180) { r = 0; g = chroma; b = x } else if (180 <= h && h < 240) { r = 0; g = x; b = chroma } else if (240 <= h && h < 300) { r = x; g = 0; b = chroma } else if (300 <= h && h <= 360) { r = chroma; g = 0; b = x }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  }
}
