import { useState } from 'react';

// import { useParams } from 'react-router';
import { RollingPapers } from '../components/rolling/RollingPapers';

export interface IRollingPaper {
  id: number;
  content: string;
  author: string;
  showAuthor: boolean;
}

export const RollingList = () => {
  //   const { id } = useParams();
  const NAME = '김철수';
  const [rollingPapers] = useState(ROLLING_PAPERS);
  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12 bg-blue-200 overflow-x-hidden">
      <div className="mx-auto max-w-3xl ">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">{NAME}님의 롤링 페이퍼 </h1>
        <RollingPapers rollingPapers={rollingPapers} />
      </div>
    </div>
  );
};

const ROLLING_PAPERS: IRollingPaper[] = [
  {
    id: 1,
    content: '롤링 페이퍼 1',
    author: '작성자 1',
    showAuthor: true,
  },
  {
    id: 2,
    content: '롤링 페이퍼 2',
    author: '작성자 2',
    showAuthor: true,
  },
  {
    id: 3,
    content: '롤링 페이퍼 3',
    author: '작성자 3',
    showAuthor: true,
  },
  {
    id: 4,
    content: '롤링 페이퍼 4',
    author: '작성자 4',
    showAuthor: false,
  },
  {
    id: 5,
    content: '롤링 페이퍼 5',
    author: '작성자 5',
    showAuthor: true,
  },
  {
    id: 6,
    content: '롤링 페이퍼 6',
    author: '작성자 6',
    showAuthor: true,
  },
  {
    id: 7,
    content: '롤링 페이퍼 7',
    author: '작성자 7',
    showAuthor: true,
  },
  {
    id: 8,
    content: '롤링 페이퍼 8',
    author: '작성자 8',
    showAuthor: true,
  },
  {
    id: 9,
    content: '롤링 페이퍼 9',
    author: '작성자 9',
    showAuthor: true,
  },
  {
    id: 10,
    content: '롤링 페이퍼 10',
    author: '작성자 10',
    showAuthor: true,
  },
  {
    id: 11,
    content: '롤링 페이퍼 11',
    author: '작성자 11',
    showAuthor: true,
  },
  {
    id: 12,
    content: '롤링 페이퍼 12',
    author: '작성자 12',
    showAuthor: true,
  },
  {
    id: 13,
    content: '롤링 페이퍼 13',
    author: '작성자 13',
    showAuthor: true,
  },
  {
    id: 14,
    content: '롤링 페이퍼 14',
    author: '작성자 14',
    showAuthor: true,
  },
];
