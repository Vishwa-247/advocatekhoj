export interface LegalTip {
  id: string
  title: string
  excerpt: string
  content?: string
  category: string
  readTime: string
  author: string
  publishedDate: string
  views: number
  likes: number
  featured?: boolean
}

export const legalTipsData: LegalTip[] = [
  {
    id: "1",
    title: "Do you really need an advocate?",
    excerpt: "Sometimes it's easy to know if you need an advocate. If you've been charged with a crime, been served with a lawsuit, or need a divorce - an advocate is exactly what you need. Advocates, however, aren't just for criminals or those in litigation.",
    content: `Sometimes it's easy to know if you need an advocate. If you've been charged with a crime, been served with a lawsuit, or need a divorce - an advocate is exactly what you need. Advocates, however, aren't just for criminals or those in litigation.

A skilled advocate's advice can help you understand the complex rules associated with business negotiations and partnerships, estate planning, adoption, will and trust drafting, tax strategies and much more.

Advocates improve their clients' quality of life by protecting them from situations that might bring later plenty of emotional and financial hardship. We have enrolled a set of qualified advocates to help those in trouble and those who want to avoid trouble in the future. You can begin your search for legal help by presenting your case to AdvocateKhoj, wherein qualified advocates can review your case. Finding an advocate at AdvocateKhoj is fast, free and confidential!`,
    category: "Getting Started",
    readTime: "5 min read",
    author: "Legal Team",
    publishedDate: "2024-01-15",
    views: 1234,
    likes: 89,
    featured: true
  },
  {
    id: "2",
    title: "What to consider before you look for an advocate?",
    excerpt: "Before seeking legal representation, it's important to understand your specific needs and what type of legal expertise will best serve your situation.",
    category: "Getting Started",
    readTime: "4 min read",
    author: "Legal Advisory Panel",
    publishedDate: "2024-01-14",
    views: 987,
    likes: 67
  },
  {
    id: "3",
    title: "Ask yourself and others, if it is possible and prudent to solve your own problem?",
    excerpt: "Not every legal issue requires professional representation. Learn when you can handle matters yourself and when it's essential to seek legal counsel.",
    category: "Self-Help",
    readTime: "6 min read",
    author: "Legal Guidance Team",
    publishedDate: "2024-01-13",
    views: 756,
    likes: 45
  },
  {
    id: "4",
    title: "Determine the immediacy of your situation.",
    excerpt: "Understanding the urgency of your legal matter helps you prioritize your response and choose the appropriate level of legal assistance.",
    category: "Legal Strategy",
    readTime: "3 min read",
    author: "Strategy Expert",
    publishedDate: "2024-01-12",
    views: 654,
    likes: 34
  },
  {
    id: "5",
    title: "Find an advocate that best suits your needs.",
    excerpt: "Choosing the right advocate involves considering their expertise, experience, communication style, and fee structure to ensure the best fit for your case.",
    category: "Choosing Advocate",
    readTime: "8 min read",
    author: "Selection Committee",
    publishedDate: "2024-01-11",
    views: 892,
    likes: 78
  },
  {
    id: "6",
    title: "Do a careful background check on the advocate before hiring him/her.",
    excerpt: "Due diligence in vetting your potential advocate can save you from future complications and ensure you're working with a qualified professional.",
    category: "Choosing Advocate",
    readTime: "7 min read",
    author: "Verification Team",
    publishedDate: "2024-01-10",
    views: 543,
    likes: 56
  },
  {
    id: "7",
    title: "Consider more than one advocate.",
    excerpt: "Consulting multiple advocates allows you to compare approaches, fees, and expertise to make an informed decision about your legal representation.",
    category: "Choosing Advocate",
    readTime: "5 min read",
    author: "Advisory Panel",
    publishedDate: "2024-01-09",
    views: 432,
    likes: 23
  },
  {
    id: "8",
    title: "Ask yourself these 11 questions before agreeing to hire any advocate.",
    excerpt: "Essential questions to evaluate potential advocates including their experience, fees, communication style, and approach to your specific case.",
    category: "Evaluation",
    readTime: "10 min read",
    author: "Legal Checklist Team",
    publishedDate: "2024-01-08",
    views: 1123,
    likes: 134
  },
  {
    id: "9",
    title: "Things to remember while discussing fees.",
    excerpt: "Understanding fee structures, payment terms, and cost expectations helps establish a clear financial arrangement with your advocate.",
    category: "Fees & Costs",
    readTime: "6 min read",
    author: "Financial Advisory",
    publishedDate: "2024-01-07",
    views: 678,
    likes: 45
  },
  {
    id: "10",
    title: "Establish ground rules.",
    excerpt: "Setting clear expectations and communication protocols with your advocate ensures a smooth working relationship throughout your case.",
    category: "Working Relationship",
    readTime: "4 min read",
    author: "Relationship Manager",
    publishedDate: "2024-01-06",
    views: 567,
    likes: 67
  },
  {
    id: "11",
    title: "Develop a strategic plan.",
    excerpt: "Collaborate with your advocate to create a comprehensive strategy that outlines goals, timelines, and expected outcomes for your legal matter.",
    category: "Legal Strategy",
    readTime: "9 min read",
    author: "Strategy Consultant",
    publishedDate: "2024-01-05",
    views: 789,
    likes: 89
  },
  {
    id: "12",
    title: "Always evaluate your advocate.",
    excerpt: "Regularly assess your advocate's performance and communication to ensure they continue to meet your needs throughout the legal process.",
    category: "Working Relationship",
    readTime: "5 min read",
    author: "Performance Team",
    publishedDate: "2024-01-04",
    views: 345,
    likes: 23
  }
]

export const legalTipCategories = [
  "All",
  "Getting Started",
  "Choosing Advocate", 
  "Legal Strategy",
  "Evaluation",
  "Fees & Costs",
  "Working Relationship",
  "Self-Help"
]
