import block1 from './learningDataBlock1';
import block2 from './learningDataBlock2';
import block3 from './learningDataBlock3';
import block4 from './learningDataBlock4';

export type MobileLearningContent = {
  number: number;
  title: string;
  originalName: string;
  manufacturer: string;
  model: string;
  whatIs: string;
  whatItDoes: string;
  learningOutcomes: string;
  principle: string;
  mainParts: string;
  samplePreparation: string;
  workflow: string;
  resultInterpretation: string;
  commonMistakes: string;
  safety: string;
  maintenance: string;
  calibrationTroubleshooting: string;
  practice: string;
  sources: Array<{ label: string; url?: string; note: string }>;
};

const learningBlocks: Record<number, MobileLearningContent> = {
  ...(block1 as Record<number, MobileLearningContent>),
  ...(block2 as Record<number, MobileLearningContent>),
  ...(block3 as Record<number, MobileLearningContent>),
  ...(block4 as Record<number, MobileLearningContent>),
};

export function getLearningContent(number: number): MobileLearningContent | undefined {
  return learningBlocks[number];
}
