import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'


export function inHsvToRgb(hsv: Hsv): Rgb {
  const { h, s, v } = hsv

  // 채도가 0이면 높이(V) 자체가 곧 R, G, B가 되는 완전한 무채색(회색) 평면
  if (s === 0) {
    const val = Math.round(v * 255)
    return { r: val, g: val, b: val }
  }

  // 360도 색상환을 육각뿔의 6개 구역(0~5)으로 나눔
  const sector = Math.floor(h / 60) % 6
  const fractional = (h / 60) - Math.floor(h / 60) // 구역 내부에서의 상대적 위치 (소수점)

  // 육각뿔 공식에 의한 선형 보간 값 연산
  const p = v * (1 - s)
  const q = v * (1 - fractional * s)
  const t = v * (1 - (1 - fractional) * s)

  // 6개 구역의 결과를 튜플 배열 형태로 미리 매핑
  const sectors: [number, number, number][] = [
    [v, t, p], // 0
    [q, v, p], // 1
    [p, v, t], // 2
    [p, q, v], // 3
    [t, p, v], // 4
    [v, p, q] // 5
  ]

  // 내 구역(sector)에 맞는 배열을 콕 집어서 단 한 줄로 구조 분해 할당!
  const [r, g, b] = sectors[sector]!

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  }
}
