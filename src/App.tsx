import React, { useEffect } from 'react';
import Home from './pages/Home';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="App min-h-screen bg-white dark:bg-slate-900">
      <Home />
    </div>
  );
};

export default App;