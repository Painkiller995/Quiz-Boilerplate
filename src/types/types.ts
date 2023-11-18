export type QuestionProps = {
  question: string;
  answers: { id: string; text: string; correct?: boolean }[];
  imageUri: string;
};
