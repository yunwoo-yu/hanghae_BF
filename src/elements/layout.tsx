import { Sparkles, Star, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { getParticleColor, getParticlePosition } from '@/utils/particleUtils';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 1000),
      setTimeout(() => setStage(3), 1800),
      setTimeout(() => setStage(4), 2500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 relative">
      {/* 화려한 배경 애니메이션 */}
      <div className="absolute inset-0 z-0">
        {/* 화려한 파티클들 */}
        {Array.from({ length: 30 }).map((_, i) => {
          const position = getParticlePosition(i);
          return (
            <div
              key={i}
              className={`absolute transition-all duration-1000 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: `${2 + ((i * 0.1) % 3)}s`,
              }}
            >
              <div className={twMerge(`w-1 h-1 sm:w-2 sm:h-2 rounded-full animate-twinkle`, getParticleColor(i))} />
            </div>
          );
        })}

        {/* 큰 장식 요소들 */}
        {stage >= 2 && (
          <>
            <div className="absolute top-1/4 left-1/4 animate-float-slow">
              <Star className="w-8 h-8 text-yellow-300 opacity-60" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-float-reverse">
              <Sparkles className="w-6 h-6 text-pink-300 opacity-60" />
            </div>
            <div className="absolute top-1/2 left-1/6 animate-bounce">
              <Zap className="w-5 h-5 text-blue-300 opacity-60" />
            </div>
            <div className="absolute bottom-1/4 right-1/3 animate-spin-slow">
              <Star className="w-4 h-4 text-purple-300 opacity-60" />
            </div>
          </>
        )}
      </div>
      <div className="relative z-10 w-full px-2 lg:px-0 max-w-5xl">{children}</div>
    </div>
  );
};
