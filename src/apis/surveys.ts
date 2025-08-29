import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '@/lib/firebase';

// 타입 정의
export interface SurveyData {
  personality: Record<string, number>;
  taste: Record<string, string>;
  values: Record<string, number>;
}

export interface SurveyResult extends SurveyData {
  completedAt: string;
  updatedAt: string;
}

// 1. 설문 결과 저장 (personality, taste, values 한번에)
export const saveSurveyResult = async (
  userId: string,
  surveyData: SurveyData
): Promise<{ success: boolean; message: string }> => {
  try {
    const { personality, taste, values } = surveyData;

    const surveyDoc = doc(db, 'survey', userId);
    const surveyResult: SurveyResult = {
      personality,
      taste,
      values,
      completedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // setDoc으로 문서 전체 덮어쓰기 (없으면 생성, 있으면 교체)
    await setDoc(surveyDoc, surveyResult);

    return { success: true, message: '설문 결과가 성공적으로 저장되었습니다.' };
  } catch (error) {
    console.error('Error saving survey:', error);
    throw new Error('설문 결과 저장에 실패했습니다.');
  }
};

// 2. 설문 결과 조회
export const getSurveyResult = async (
  userId: string
): Promise<{ success: boolean; data?: SurveyResult; message?: string }> => {
  try {
    const surveyDoc = doc(db, 'survey', userId);
    const surveySnapshot = await getDoc(surveyDoc);

    if (!surveySnapshot.exists()) {
      return { success: false, message: '설문 결과를 찾을 수 없습니다.' };
    }

    const surveyData = surveySnapshot.data() as SurveyResult;
    return { success: true, data: surveyData };
  } catch (error) {
    console.error('Error getting survey result:', error);
    return { success: false, message: '설문 결과 조회에 실패했습니다.' };
  }
};
