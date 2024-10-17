import React from 'react';
import { User, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">My Blog App</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-2">John Doe</span>
          <User className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;