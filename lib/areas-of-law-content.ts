export type AreaCategory = {
  id: string;
  title: string;
  subcategories: string[];
};

export type TopicContent = {
  title: string;
  introduction: string;
  sections: Array<{
    title: string;
    content: string[];
    subsections?: Array<{ title: string; content: string[] }>;
  }>;
};

const CATEGORIES: AreaCategory[] = [
  {
    id: "adoption",
    title: "Adoption",
    subcategories: ["Adoption (Hindus)", "Adoption (Others)"],
  },
  {
    id: "appeals",
    title: "Appeals",
    subcategories: ["Introduction", "Supreme Court"],
  },
];

export function getCategoryById(id: string): AreaCategory | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getTopicContent(
  categoryId: string,
  topicId: string,
): TopicContent | undefined {
  const category = getCategoryById(categoryId);
  if (!category) return undefined;

  const index = parseInt(topicId, 10) - 1;
  if (Number.isNaN(index) || index < 0 || index >= category.subcategories.length)
    return undefined;

  const title = category.subcategories[index];

  // Minimal placeholder content so the site builds and renders.
  const content: TopicContent = {
    title,
    introduction: `Overview of ${title}. This is placeholder content provided by the build helper module. Replace with real content as needed.`,
    sections: [
      {
        title: "Background",
        content: [
          "This section explains the background and context.",
          "Add more detailed content here.",
        ],
      },
      {
        title: "Laws and Procedure",
        content: [
          "Relevant statutes and procedural guidance.",
          "References and notes can go here.",
        ],
        subsections: [
          {
            title: "Key Statutes",
            content: ["Statute 1", "Statute 2"],
          },
        ],
      },
    ],
  };

  return content;
}
