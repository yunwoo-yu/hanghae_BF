import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  surveyType?: 'personality' | 'values' | 'taste';
}

function Progress({ className, value, surveyType = 'personality', ...props }: ProgressProps) {
  const gradientColors = {
    personality: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600',
    values: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600',
    taste: 'bg-gradient-to-r from-red-400 via-red-500 to-red-600',
  };
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn('h-full w-full flex-1 transition-all duration-500 ease-in-out', gradientColors[surveyType])}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
