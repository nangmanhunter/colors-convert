// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,             // .d.ts 빌드 활성화
  splitting: false,
  clean: true,           // 빌드 전 dist 폴더 싹 청소
  minify: true,
  
  // 💡 tsup 내부 엔진이 헛짓하지 못하도록 우리가 만든 tsconfig.json을 강제로 다이렉트 바인딩합니다.
  tsconfig: './tsconfig.json'
})