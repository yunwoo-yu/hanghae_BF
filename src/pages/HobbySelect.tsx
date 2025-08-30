import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

import { updateUserHobbies } from '@/apis/users';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/elements/badge';
import { Button } from '@/elements/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';
import { Label } from '@/elements/label';
import { Layout } from '@/elements/layout';
import { PATH } from '@/routers/router';
import { HOBBIES } from '@/utils/hobbyUtils';

export const HobbySelect = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const { mutate } = useMutation({
    mutationFn: ({ userHobbies, userId }: { userHobbies: string[]; userId: string }) =>
      updateUserHobbies(userId, userHobbies),
    onSuccess: () => {
      navigate(PATH.SURVEY());
    },
    onError: () => {
      //실패얼럿
    },
  });

  // 최대 선택 개수 상수
  const MAX_SELECTIONS = 5;

  // 취미 선택/해제 핸들러
  const toggleHobby = (hobbyId: string) => {
    setSelectedHobbies((prev) => {
      const isCurrentlySelected = prev.includes(hobbyId);

      if (isCurrentlySelected) {
        // 이미 선택된 취미라면 해제
        const newSelection = prev.filter((id) => id !== hobbyId);
        return newSelection;
      } else {
        // 최대 선택 개수 체크
        if (prev.length >= MAX_SELECTIONS) {
          return prev;
        }
        // 새로운 취미 추가
        const newSelection = [...prev, hobbyId];
        return newSelection;
      }
    });
  };

  // 다음 단계로 진행
  const handleSubmit = () => {
    if (selectedHobbies.length > 0 && user) {
      mutate({ userHobbies: selectedHobbies, userId: user.id });
    }
  };

  if (user?.hobbies.length) return <Navigate to={PATH.SURVEY()} />;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <Card className="mb-6 border-0 shadow-md bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          <CardHeader className="text-center relative z-10 py-8">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br bg-white rounded-full mb-3 shadow-md">
                <img src="/Party popper.png" alt="Party" className="w-16 h-16 object-contain" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3">
              취미를 선택해주세요
            </CardTitle>
          </CardHeader>
        </Card>

        {/* 진행 상태 */}
        <Card className="mb-6 border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <Label className="text-sm font-medium text-slate-700">
                ({selectedHobbies.length}/{MAX_SELECTIONS}개 선택)
                <CardDescription className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  <span className="font-semibold text-blue-600">최소 1개에서 최대 5개까지 선택 가능</span>
                </CardDescription>
              </Label>
            </div>
            {selectedHobbies.length >= MAX_SELECTIONS && (
              <p className="text-sm text-amber-600 mt-2 text-center">
                최대 {MAX_SELECTIONS}개까지 선택되었습니다. 더 선택하려면 기존 선택을 해제해주세요.
              </p>
            )}
          </CardContent>
        </Card>

        {/* 취미 선택 그리드 */}
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {HOBBIES.map((hobby) => {
            const isSelected = selectedHobbies.includes(hobby.id);
            const isDisabled = !isSelected && selectedHobbies.length >= MAX_SELECTIONS;

            return (
              <Button
                key={hobby.id}
                variant={isSelected ? 'default' : 'outline'}
                disabled={isDisabled}
                data-hobby-id={hobby.id}
                data-hobby-name={hobby.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleHobby(hobby.id);
                }}
                className={`
                    relative z-10
                    h-auto min-h-[80px] sm:min-h-[90px] md:min-h-[100px]
                    flex flex-col items-center justify-center gap-2
                    p-3 sm:p-4
                    pointer-events-auto
                    cursor-pointer
                    ${
                      isSelected
                        ? 'bg-gray-700 text-white shadow-lg scale-102'
                        : isDisabled
                          ? 'opacity-50 cursor-not-allowed bg-white'
                          : 'bg-white hover:bg-gray-50 hover:scale-102 hover:shadow-md'
                    }
                    transition-all duration-200
                  `}
              >
                <img src={hobby.icon} alt={hobby.name} className="w-10 h-10 object-contain" />
                <div className="text-xs sm:text-sm font-medium leading-tight">{hobby.name}</div>
                {isSelected && (
                  <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black text-xs">✓</span>
                  </div>
                )}
              </Button>
            );
          })}
        </div>

        {/* 선택된 취미 미리보기 */}
        {selectedHobbies.length > 0 && (
          <Card className="mb-6 border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">
                선택된 취미 ({selectedHobbies.length}개)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {selectedHobbies.map((hobbyId) => {
                  const hobby = HOBBIES.find((h) => h.id === hobbyId);
                  return (
                    <Badge
                      key={hobbyId}
                      variant="secondary"
                      className="inline-flex items-center gap-2 px-3 py-2 text-sm"
                    >
                      {hobby?.icon && <img src={hobby.icon} alt={hobby.name} className="w-5 h-5 object-contain" />}{' '}
                      {hobby?.name}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 하단 버튼 */}

        <div className="flex justify-center items-center md:justify-end">
          <Button
            onClick={handleSubmit}
            disabled={selectedHobbies.length === 0}
            size="lg"
            className="px-8 w-full md:w-1/3 "
          >
            완료
          </Button>
        </div>
      </div>
    </Layout>
  );
};
