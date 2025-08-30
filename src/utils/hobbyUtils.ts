import animation from '@/assets/images/hobby/anime.svg';
import art from '@/assets/images/hobby/art.svg';
import baseball from '@/assets/images/hobby/baseball.svg';
import beer from '@/assets/images/hobby/beer.svg';
import boardGame from '@/assets/images/hobby/board.svg';
import books from '@/assets/images/hobby/books.svg';
import camera from '@/assets/images/hobby/camera.svg';
import camping from '@/assets/images/hobby/camping.svg';
import catching_doll from '@/assets/images/hobby/catching_doll.svg';
import climbing from '@/assets/images/hobby/climbing.svg';
import coding from '@/assets/images/hobby/coding.svg';
import coffee from '@/assets/images/hobby/coffee.svg';
import consoleGame from '@/assets/images/hobby/console_game.svg';
import cooking from '@/assets/images/hobby/cooking.svg';
import dance from '@/assets/images/hobby/dance.svg';
import escape from '@/assets/images/hobby/escape.svg';
import food from '@/assets/images/hobby/food.svg';
import hiking from '@/assets/images/hobby/hiking.svg';
import movie from '@/assets/images/hobby/movie.svg';
import music from '@/assets/images/hobby/music.svg';
import musical from '@/assets/images/hobby/musical.svg';
import pcGame from '@/assets/images/hobby/pc.svg';
import sing from '@/assets/images/hobby/sing.svg';
import sleep from '@/assets/images/hobby/sleep.svg';
import soccer from '@/assets/images/hobby/soccer.svg';
import sport from '@/assets/images/hobby/sport.svg';
import travel from '@/assets/images/hobby/travel.svg';
import walking from '@/assets/images/hobby/walking.svg';
import write from '@/assets/images/hobby/write.svg';
import yarn from '@/assets/images/hobby/yarn.svg';
import type { Hobby } from '@/types/hobby';

export const HOBBIES: Hobby[] = [
  // 게임/엔터테인먼트
  {
    id: 'boardgame',
    name: '보드게임',
    category: '게임',
    icon: boardGame,
    color: 'bg-blue-50 border-blue-200',
    hoverColor: 'bg-blue-100 border-blue-300',
    description: '전략과 재미의 보드게임',
  },
  {
    id: 'console',
    name: '콘솔게임',
    category: '게임',
    icon: consoleGame,
    color: 'bg-green-50 border-green-200',
    hoverColor: 'bg-green-100 border-green-300',
    description: '콘솔로 즐기는 게임',
  },
  {
    id: 'pcgame',
    name: 'PC게임',
    category: '게임',
    icon: pcGame,
    color: 'bg-purple-50 border-purple-200',
    hoverColor: 'bg-purple-100 border-purple-300',
    description: 'PC로 즐기는 게임',
  },
  {
    id: 'escape',
    name: '방탈출',
    category: '게임',
    icon: escape,
    color: 'bg-red-50 border-red-200',
    hoverColor: 'bg-red-100 border-red-300',
    description: '수수께끼를 풀어 탈출하기',
  },

  // 예술/창작
  {
    id: 'photography',
    name: '사진 찍기',
    category: '예술',
    icon: camera,
    color: 'bg-amber-50 border-amber-200',
    hoverColor: 'bg-amber-100 border-amber-300',
    description: '순간을 영원히 담기',
  },
  {
    id: 'reading',
    name: '독서',
    category: '예술',
    icon: books,
    color: 'bg-indigo-50 border-indigo-200',
    hoverColor: 'bg-indigo-100 border-indigo-300',
    description: '지식과 상상력의 확장',
  },
  {
    id: 'dance',
    name: '댄스',
    category: '예술',
    icon: dance,
    color: 'bg-pink-50 border-pink-200',
    hoverColor: 'bg-pink-100 border-pink-300',
    description: '음악에 맞춰 춤추기',
  },
  {
    id: 'kono',
    name: '코노',
    category: '예술',
    icon: sing,
    color: 'bg-orange-50 border-orange-200',
    hoverColor: 'bg-orange-100 border-orange-300',
    description: '창의적인 놀이',
  },
  {
    id: 'coding',
    name: '코딩',
    category: '기술',
    icon: coding,
    color: 'bg-gray-50 border-gray-200',
    hoverColor: 'bg-gray-100 border-gray-300',
    description: '논리적 사고와 창작',
  },

  // 음식/음료
  {
    id: 'soccer',
    name: '축구',
    category: '운동',
    icon: soccer,
    color: 'bg-amber-50 border-amber-200',
    hoverColor: 'bg-amber-100 border-amber-300',
    description: '축구를 즐기기',
  },
  {
    id: 'beer',
    name: '음주',
    category: '음식',
    icon: beer,
    color: 'bg-yellow-50 border-yellow-200',
    hoverColor: 'bg-yellow-100 border-yellow-300',
    description: '맥주와 함께하는 시간',
  },

  // 운동/스포츠
  {
    id: 'hiking',
    name: '등산',
    category: '운동',
    icon: hiking,
    color: 'bg-green-50 border-green-200',
    hoverColor: 'bg-green-100 border-green-300',
    description: '산을 오르며 자연을 느끼기',
  },
  {
    id: 'climbing',
    name: '클라이밍',
    category: '운동',
    icon: climbing,
    color: 'bg-red-50 border-red-200',
    hoverColor: 'bg-red-100 border-red-300',
    description: '벽을 타며 도전하기',
  },
  {
    id: 'walking',
    name: '산책',
    category: '운동',
    icon: walking,
    color: 'bg-blue-50 border-blue-200',
    hoverColor: 'bg-blue-100 border-blue-300',
    description: '천천히 걸으며 여유를 즐기기',
  },
  {
    id: 'baseball',
    name: '야구',
    category: '운동',
    icon: baseball,
    color: 'bg-green-50 border-green-200',
    hoverColor: 'bg-green-100 border-green-300',
    description: '야구로 운동하기',
  },
  {
    id: 'exercise',
    name: '운동',
    category: '운동',
    icon: sport,
    color: 'bg-red-50 border-red-200',
    hoverColor: 'bg-red-100 border-red-300',
    description: '체력 단련과 건강 관리',
  },

  // 엔터테인먼트
  {
    id: 'anime',
    name: '애니메이션',
    category: '엔터테인먼트',
    icon: animation,
    color: 'bg-purple-50 border-purple-200',
    hoverColor: 'bg-purple-100 border-purple-300',
    description: '애니메이션 감상하기',
  },
  {
    id: 'movie',
    name: '영화',
    category: '엔터테인먼트',
    icon: movie,
    color: 'bg-slate-50 border-slate-200',
    hoverColor: 'bg-slate-100 border-slate-300',
    description: '다양한 이야기와 감동',
  },
  {
    id: 'knitting',
    name: '뜨개질',
    category: '예술',
    icon: yarn,
    color: 'bg-pink-50 border-pink-200',
    hoverColor: 'bg-pink-100 border-pink-300',
    description: '뜨개질로 창작하기',
  },
  {
    id: 'travel',
    name: '여행',
    category: '여행',
    icon: travel,
    color: 'bg-teal-50 border-teal-200',
    hoverColor: 'bg-teal-100 border-teal-300',
    description: '새로운 경험과 발견',
  },
  {
    id: 'camping',
    name: '캠핑',
    category: '여행',
    icon: camping,
    color: 'bg-green-50 border-green-200',
    hoverColor: 'bg-green-100 border-green-300',
    description: '자연 속에서 캠핑하기',
  },

  // 음식/요리
  {
    id: 'cooking',
    name: '요리',
    category: '음식',
    icon: cooking,
    color: 'bg-orange-50 border-orange-200',
    hoverColor: 'bg-orange-100 border-orange-300',
    description: '맛과 창의성의 조화',
  },
  {
    id: 'sleeping',
    name: '잠자기',
    category: '휴식',
    icon: sleep,
    color: 'bg-blue-50 border-blue-200',
    hoverColor: 'bg-blue-100 border-blue-300',
    description: '충분한 휴식과 수면',
  },
  {
    id: 'cafe',
    name: '카페 탐방',
    category: '음식',
    icon: coffee,
    color: 'bg-amber-50 border-amber-200',
    hoverColor: 'bg-amber-100 border-amber-300',
    description: '다양한 카페를 찾아다니기',
  },
  {
    id: 'restaurant',
    name: '맛집 탐방',
    category: '음식',
    icon: food,
    color: 'bg-red-50 border-red-200',
    hoverColor: 'bg-red-100 border-red-300',
    description: '맛있는 음식점 찾기',
  },

  // 문화/예술
  {
    id: 'musical',
    name: '뮤지컬',
    category: '문화',
    icon: musical,
    color: 'bg-purple-50 border-purple-200',
    hoverColor: 'bg-purple-100 border-purple-300',
    description: '뮤지컬 공연 감상',
  },
  {
    id: 'writing',
    name: '글쓰기',
    category: '예술',
    icon: write,
    color: 'bg-indigo-50 border-indigo-200',
    hoverColor: 'bg-indigo-100 border-indigo-300',
    description: '생각과 감정을 글로 표현',
  },
  {
    id: 'crane',
    name: '인형 뽑기',
    category: '게임',
    icon: catching_doll,
    color: 'bg-pink-50 border-pink-200',
    hoverColor: 'bg-pink-100 border-pink-300',
    description: '인형 뽑기 게임',
  },
  {
    id: 'drawing',
    name: '그림 그리기',
    category: '예술',
    icon: art,
    color: 'bg-pink-50 border-pink-200',
    hoverColor: 'bg-pink-100 border-pink-300',
    description: '색과 선으로 표현하기',
  },

  // 음악
  {
    id: 'music',
    name: '음악듣기',
    category: '음악',
    icon: music,
    color: 'bg-indigo-50 border-indigo-200',
    hoverColor: 'bg-indigo-100 border-indigo-300',
    description: '다양한 음악 감상하기',
  },
];
