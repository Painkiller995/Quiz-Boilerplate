import type { QuestionProps } from '@/types/types';

export const questions: QuestionProps[] = [
  {
    question: 'Test 1?',
    answers: [
      {
        id: '1',
        text: '1',
      },
      {
        id: '2',
        text: '2',
        correct: true,
      },
      {
        id: '3',
        text: '3',
      },
    ],
  },
  {
    question: 'Test 2?',
    answers: [
      {
        id: '1',
        text: '1',
        correct: true,
      },
      {
        id: '2',
        text: '2',
      },
      {
        id: '3',
        text: '3',
      },
    ],
  },
];
