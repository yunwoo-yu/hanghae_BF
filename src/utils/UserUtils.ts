import type { User } from '@/apis/users';

type UserRawData = {
  [key: string]: Omit<User, 'id'>;
};

export const convertRawDataToUsers = (rawData: UserRawData): User[] => {
  return Object.entries(rawData).map(([userId, userData]) => ({
    id: userId,
    ...userData,
  }));
};

export const findUserById = (rawData: UserRawData, id?: string) => {
  if (!id) throw Error('');
  const user = rawData[id];
  if (user) return user;
  throw Error('유저가 없습니다.');
};
