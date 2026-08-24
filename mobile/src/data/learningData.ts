export type OfficialSource = { label: string; url?: string; note: string };

export type LearningContent = {
  number: number;
  title: string;
  originalName: string;
  manufacturer: string;
  model: string;
  sourceKind: 'learning';
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
  sources: OfficialSource[];
};
