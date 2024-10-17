import React from 'react';
import { Article } from '../api';

interface ContentProps {
  selectedArticle: Article | null;
}

const Content: React.FC<ContentProps> = ({ selectedArticle }) => {
  return (
    <div className="w-3/4 p-4 overflow-y-auto h-[calc(100vh-12rem)]">
      {selectedArticle ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
          <p>{selectedArticle.content}</p>
        </>
      ) : (
        <p className="text-gray-500 text-center mt-10">Select an article to view its content</p>
      )}
    </div>
  );
};

export default Content;