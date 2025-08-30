import { Progress } from '@/elements/progress';

interface ProgressBarProps {
  currentQuestion: number;
  progress: number;
  surveyType: 'personality' | 'values' | 'taste';
}

export const ProgressBar = ({ currentQuestion, progress, surveyType }: ProgressBarProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold">진행률</span>
        <span className="font-bold">{currentQuestion + 1} / 10</span>
      </div>
      <Progress value={progress} className="h-3" surveyType={surveyType} />
    </div>
  );
};
