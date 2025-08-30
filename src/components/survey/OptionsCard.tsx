import { twMerge } from 'tailwind-merge';

import type { SurveyCategory } from '@/types/survey';
import { SURVEY_CARDS } from '@/utils/surveyUtils';

export const OptionsCard = ({ category }: { category: SurveyCategory }) => {
  return (
    <div
      className={twMerge(
        'group p-4 sm:p-5 md:p-6 lg:p-5 bg-gradient-to-r rounded-2xl border hover:shadow-lg hover:scale-105 transition-all duration-300',
        SURVEY_CARDS[category].colors.bg,
        SURVEY_CARDS[category].colors.border
      )}
    >
      <div className="flex items-center space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-4">
        <div
          className={twMerge(
            'p-3 sm:p-4 md:p-5 lg:p-4 bg-gradient-to-br rounded-xl shadow-md flex-shrink-0',
            SURVEY_CARDS[category].colors.gradient
          )}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
            <img
              src={SURVEY_CARDS[category].icon}
              alt={SURVEY_CARDS[category].title}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10"
            />
          </div>
        </div>
        <div className="text-left flex-1 min-w-0">
          <div
            className={twMerge(
              'font-bold text-base sm:text-lg md:text-xl lg:text-lg mb-1',
              SURVEY_CARDS[category].colors.text
            )}
          >
            {SURVEY_CARDS[category].title}
          </div>
          <div
            className={twMerge(
              'text-sm sm:text-base md:text-lg lg:text-base leading-relaxed whitespace-pre-line',
              SURVEY_CARDS[category].colors.textSecondary
            )}
          >
            {SURVEY_CARDS[category].description}
          </div>
        </div>
      </div>
    </div>
  );
};
