import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // 진입점
  format: ['esm', 'cjs'], // ESM + CommonJS 동시 지원
  dts: true, // 타입 정의 파일 생성 (.d.ts)
  sourcemap: true, // 디버깅을 위한 소스맵
  clean: true, // 이전 빌드 파일 삭제
  external: ['react', 'react-dom'], // peerDependencies는 외부로 설정
  outDir: 'dist',
  treeshake: true,
  target: 'esnext'
});
