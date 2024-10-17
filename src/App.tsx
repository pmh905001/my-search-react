import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { fetchArticles, Article } from './api';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMoreArticles();
  }, []);

  const loadMoreArticles = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newArticles = await fetchArticles(page);
      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SearchBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          articles={articles}
          onSelectArticle={setSelectedArticle}
          onLoadMore={loadMoreArticles}
          loading={loading}
        />
        <Content selectedArticle={selectedArticle} />
      </div>
    </div>
  );
}

export default App;