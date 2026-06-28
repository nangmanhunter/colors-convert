export interface Rgb {
  r: number // 0 ~ 255 정수
  g: number // 0 ~ 255 정수
  b: number // 0 ~ 255 정수
}

export type Hex = `#${string}` // #000000

export interface Hsv {
  h: number // 0 ~ 360 도
  s: number // 0 ~ 1 비율
  v: number // 0 ~ 1 비율
}

export interface Hsl {
  h: number // 0 ~ 360 도
  s: number // 0 ~ 1 비율
  l: number // 0 ~ 1 비율
}
