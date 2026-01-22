
import React from 'react';

interface HeaderProps {
  currentView: 'form' | 'about';
  setView: (view: 'form' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z"/>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
              <path d="M2 2l7.5 1.5"/>
              <path d="M7.08 22.5c4.83 0 12.7-3.97 12.7-11.5 0-6.09-3.37-12-3.37-12s-9.67 2.5-11.05 11c-.7 4.35 1.72 12.5 1.72 12.5z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-primary leading-none">مصعب</span>
            <span className="text-sm font-bold text-accent tracking-widest uppercase">ديزاين</span>
          </div>
        </div>
        
        <nav className="flex items-center gap-2 md:gap-8">
          <button 
            onClick={() => setView('form')}
            className={`text-sm font-bold transition-all px-4 py-2 rounded-lg ${currentView === 'form' ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-primary'}`}
          >
            طلب تصميم
          </button>
          <button 
            onClick={() => setView('about')}
            className={`text-sm font-bold transition-all px-4 py-2 rounded-lg ${currentView === 'about' ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-primary'}`}
          >
            نبذة عني
          </button>
          <div className="hidden md:block h-6 w-[1px] bg-slate-200 mx-2"></div>
          <a 
            href="https://www.behance.net/musabdes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md"
          >
            <span>أعمالي</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
