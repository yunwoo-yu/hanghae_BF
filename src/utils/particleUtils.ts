/** 파티클 색상 및 위치 관리 유틸리티 */

/** 파티클에 사용되는 색상 배열 */
export const PARTICLE_COLORS = [
  'bg-yellow-300',
  'bg-pink-300',
  'bg-blue-300',
  'bg-purple-300',
  'bg-green-300',
] as const;

/** 파티클의 고정 위치 배열 (30개) */
export const PARTICLE_POSITIONS = [
  { left: 15, top: 20 },
  { left: 85, top: 15 },
  { left: 25, top: 60 },
  { left: 70, top: 35 },
  { left: 45, top: 80 },
  { left: 90, top: 70 },
  { left: 10, top: 45 },
  { left: 60, top: 25 },
  { left: 35, top: 75 },
  { left: 80, top: 55 },
  { left: 20, top: 85 },
  { left: 65, top: 10 },
  { left: 40, top: 40 },
  { left: 75, top: 85 },
  { left: 55, top: 65 },
  { left: 30, top: 30 },
  { left: 85, top: 45 },
  { left: 15, top: 70 },
  { left: 50, top: 20 },
  { left: 95, top: 35 },
  { left: 25, top: 90 },
  { left: 70, top: 60 },
  { left: 45, top: 15 },
  { left: 10, top: 80 },
  { left: 60, top: 50 },
  { left: 35, top: 25 },
  { left: 80, top: 75 },
  { left: 20, top: 40 },
  { left: 65, top: 85 },
  { left: 90, top: 25 },
] as const;

/**
 * 인덱스에 따라 파티클 색상 클래스를 반환하는 함수
 * @param index - 파티클 인덱스
 * @returns 해당하는 색상 클래스명
 */
export function getParticleColor(index: number): string {
  return PARTICLE_COLORS[index % PARTICLE_COLORS.length];
}

/**
 * 인덱스에 따라 파티클의 고정 위치를 반환하는 함수
 * @param index - 파티클 인덱스
 * @returns 해당하는 위치 객체 (left, top 퍼센트 값)
 */
export function getParticlePosition(index: number): { left: number; top: number } {
  return PARTICLE_POSITIONS[index % PARTICLE_POSITIONS.length];
}
