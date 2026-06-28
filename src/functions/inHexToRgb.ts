import type { Rgb, Hex, Hsl, Hsv } from '../types/colors.ts'

export function inHexToRgb(hex: Hex): Rgb {
  const sanitizedHex = hex.replace('#', '')

  // 16진수 문자열을 통째로 24비트 정수로 파싱 (예: 0x3B82F6)
  const num = parseInt(sanitizedHex, 16)

  // 비트 이동 연산(>>)과 마스킹 연산(&)으로 각 8비트 구역을 칼같이 컷
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  }
}
