export interface PracticeAreaEntry {
  category: string;
  subCategory: string;
}

export const PRACTICE_AREA_ENTRIES: PracticeAreaEntry[] = [
  { category: "Administrative Law", subCategory: "Administration of Justice" },
  { category: "Administrative Law", subCategory: "Regulatory Compliance" },
  { category: "Transportation", subCategory: "Admiralty and Maritime" },
  { category: "Family Law", subCategory: "Adoption" },
  { category: "Family Law", subCategory: "Divorce & Maintenance" },
  { category: "Family Law", subCategory: "Child Custody" },
  { category: "Criminal Law", subCategory: "Adulteration of Drugs" },
  { category: "Criminal Law", subCategory: "Adultery" },
  { category: "Banking & Finance", subCategory: "Banking Regulation" },
  { category: "Corporate Law", subCategory: "Mergers and Acquisitions" },
  { category: "Corporate Law", subCategory: "General Corporate Advisory" },
  { category: "Employment Law", subCategory: "Employment Contracts" },
  { category: "Real Estate", subCategory: "Property Transactions" },
  { category: "Property Law", subCategory: "Boundary Disputes" },
  { category: "Taxation", subCategory: "Direct Taxation" },
  { category: "Taxation", subCategory: "Indirect Taxation" },
  { category: "Labour & Employment", subCategory: "Employment Contracts" },
  { category: "Intellectual Property", subCategory: "Trademark" },
  { category: "Intellectual Property", subCategory: "Copyright" },
];

export const PRACTICE_AREA_OPTIONS = PRACTICE_AREA_ENTRIES.map(
  (entry) => `${entry.category} — ${entry.subCategory}`
);
