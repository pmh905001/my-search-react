import React, { useRef, useEffect } from 'react';
import { Article } from '../api';

interface SidebarProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onLoadMore: () => void;
  loading: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ articles, onSelectArticle, onLoadMore, loading }) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollHeight - scrollTop <= clientHeight * 1.5) {
          onLoadMore();
        }
      }
    };

    const currentListRef = listRef.current;
    if (currentListRef) {
      currentListRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentListRef) {
        currentListRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onLoadMore]);

  return (
    <div className="w-1/4 bg-gray-200 p-4 overflow-hidden">
      <h2 className="text-xl font-bold mb-4">Articles</h2>
      <ul ref={listRef} className="space-y-2 overflow-y-auto h-[calc(100vh-12rem)]">
        {articles.map((article) => (
          <li
            key={article.id}
            className="cursor-pointer hover:bg-gray-300 p-2 rounded"
            onClick={() => onSelectArticle(article)}
          >
            {article.title}
          </li>
        ))}
        {loading && <li className="text-center">Loading...</li>}
      </ul>
    </div>
  );
};

export default Sidebar;