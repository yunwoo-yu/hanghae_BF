import '@/styles/animation.css';

import { OptionsCard } from '@/components/survey/OptionsCard';
import { useSurvey } from '@/components/survey/SurveyContext';
import { Button } from '@/elements/button';
import { ShipLogo } from '@/elements/ShipLogo';
import type { SurveyCategory } from '@/types/survey';
import { SURVEY_CARDS } from '@/utils/surveyUtils';

export const SurveyStart = () => {
  const { moveToNextCategory } = useSurvey();

  const handleStart = () => {
    moveToNextCategory();
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
      {/* 왼쪽 섹션: 로고 + 텍스트 */}
      <div className="lg:flex-1 lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <ShipLogo />
        </div>

        {/* 메인 질문 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
          나와 찰떡궁합인 항해인은?
        </h2>

        {/* 설명 */}
        <div className="space-y-2 mb-8 lg:mb-0">
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-lg font-medium">
            성향, 가치관, 입맛까지!
          </p>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-base">
            3단계 간단 설문으로 당신의 BF를 찾아드릴게요
          </p>
        </div>
      </div>

      {/* 오른쪽 섹션: 옵션 카드들 + 버튼 */}
      <div className="lg:flex-1 lg:max-w-md xl:max-w-lg">
        {/* 3가지 옵션 */}
        <div className="space-y-4 sm:space-y-6 md:grid md:grid-cols-1 md:gap-6 lg:space-y-4 lg:grid-cols-1 mb-8">
          {Object.keys(SURVEY_CARDS).map((key) => (
            <OptionsCard key={key} category={key as SurveyCategory} />
          ))}
        </div>

        {/* 시작하기 */}
        <Button
          className="w-full cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-xl py-4 sm:py-5 md:py-6 lg:py-4 shadow-lg hover:shadow-xl"
          size="lg"
          onClick={handleStart}
        >
          시작하기
        </Button>
      </div>
    </div>
  );
};
