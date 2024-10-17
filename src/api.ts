export interface Article {
  id: number;
  title: string;
  content: string;
}

const mockArticles: Article[] = [
  { id: 1, title: "Introduction to React", content: "React is a popular JavaScript library for building user interfaces..." },
  { id: 2, title: "Getting Started with TypeScript", content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript..." },
  { id: 3, title: "The Power of Tailwind CSS", content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces..." },
  // Add more mock articles here...
];

export const fetchArticles = async (page: number, limit: number = 10): Promise<Article[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockArticles.slice(startIndex, endIndex);
};