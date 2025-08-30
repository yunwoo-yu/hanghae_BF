import { HeartIcon } from 'lucide-react';

import valuesQuestions from '@/assets/questions/value.json';
import { ProgressBar } from '@/components/survey/ProgressBar';
import { useSurvey } from '@/components/survey/SurveyContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/elements/card';

export const SurveyValues = () => {
  const { currentQuestion, selectQuestionAnswer } = useSurvey();

  // 현재 질문 데이터 가져오기
  const currentQuestionData = valuesQuestions[currentQuestion];

  // 답변 선택 처리
  const handleAnswerSelect = (answer: number) => {
    selectQuestionAnswer(currentQuestionData.id, answer);
  };

  // 진행률 계산
  const progress = ((currentQuestion + 1) / 10) * 100;

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
      {/* 왼쪽 섹션: 제목 + 진행률 */}
      <div className="lg:flex-[0.4] lg:text-left lg:pt-4">
        <div className="text-center lg:text-left mb-6 lg:mb-8">
          {/* 아이콘 추가 */}
          <div className="flex justify-center lg:justify-start mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 rounded-2xl shadow-lg">
              <HeartIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-amber-600" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-3 lg:mb-4">
            가치관 분석
          </h1>
          <div className="inline-flex items-center justify-center bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4 lg:mb-6">
            <p className="text-amber-700 text-sm sm:text-base md:text-lg lg:text-base font-semibold">
              {currentQuestion + 1}/10 문항
            </p>
          </div>
        </div>

        {/* 진행률 표시 */}
        <div className="mb-8 lg:mb-0">
          <ProgressBar currentQuestion={currentQuestion} progress={progress} />
        </div>
      </div>

      {/* 오른쪽 섹션: 질문 카드 */}
      <div className="lg:flex-1 lg:max-w-2xl">
        <Card className="bg-white/95 backdrop-blur-md border border-amber-100/50 shadow-2xl rounded-3xl lg:rounded-[2rem] overflow-hidden">
          {/* 카드 상단 그라디언트 */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>

          <CardHeader className="text-center pb-6 pt-8 sm:pt-10 md:pt-12 lg:pt-10">
            <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl leading-relaxed text-gray-800 px-4 font-semibold">
              어떤 사람이 더 싫으신가요?
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-8 sm:pb-10 md:pb-12 lg:pb-10 px-6 sm:px-8">
            {/* 택1 답변 옵션 */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-4">
              {currentQuestionData.choices.map((option, index) => (
                <div
                  key={option}
                  className="group cursor-pointer transition-all duration-500 hover:scale-[1.02] border-2 border-amber-100 hover:border-amber-300 p-4 sm:p-5 md:p-6 lg:p-5 rounded-2xl shadow-sm hover:shadow-xl bg-gradient-to-r from-white to-amber-50/50 hover:from-amber-50 hover:to-amber-100 relative overflow-hidden"
                  onClick={() => handleAnswerSelect(index + 1)}
                >
                  {/* 호버 시 배경 애니메이션 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/5 transition-all duration-500"></div>

                  <div className="relative flex items-center justify-between">
                    <div className="text-sm sm:text-base md:text-lg lg:text-base font-semibold text-gray-700 group-hover:text-amber-700 flex-1 text-center">
                      {option}
                    </div>

                    {/* A, B 표시 */}
                    <div className="w-8 h-8 bg-amber-100 group-hover:bg-amber-200 rounded-full flex items-center justify-center ml-3 transition-all duration-300">
                      <span className="text-amber-600 group-hover:text-amber-700 font-bold text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
