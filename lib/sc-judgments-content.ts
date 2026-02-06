export type Judgment = {
  id: string;
  title: string;
  caseNumber?: string;
  judges?: string | string[];
  date?: string;
  paragraphs?: string[];
  content?: string; // legacy
};

const JUDGMENTS: Record<string, Judgment> = {
  "19424": {
    id: "19424",
    title:
      "Prakash Asphallings and Toll Highways (India) Ltd. Vs. Mandeepa Enterprises and Ors.",
    caseNumber:
      "[Civil Appeal No. 11418 of 2025 arising out of SLP (Civil) No. 12510 of 2024]",
    judges: "Ujjal Bhuyan, J.",
    date: "12/09/2025",
    paragraphs: [
      "This is sample judgment text provided to satisfy build-time imports.",
      "Replace this with real judgment paragraphs fetched from your CMS or data source.",
    ],
  },
  "19425": {
    id: "19425",
    title: "Union of India Vs. ABC Pvt. Ltd.",
    caseNumber: "[Civil Appeal No. 11419 of 2025]",
    judges: "Dr. Dhananjaya Y. Chandrachud, CJI",
    date: "11/09/2025",
    paragraphs: ["Sample paragraph 1.", "Sample paragraph 2."],
  },
};

export function getJudgmentById(id: string): Judgment | undefined {
  return JUDGMENTS[id];
}
