
import React, { useState } from 'react';
import BriefForm from './components/BriefForm';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [view, setView] = useState<'form' | 'about'>('form');

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-sans selection:bg-primary/20">
      <Header currentView={view} setView={setView} />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {view === 'form' ? (
          !submitted ? (
            <div className="max-w-4xl mx-auto bg-white shadow-2xl shadow-slate-200/50 rounded-[3rem] overflow-hidden border border-slate-100 animate__animated animate__fadeInUp">
              {/* Hero Banner inside the form container */}
              <div className="bg-primary p-12 md:p-16 text-white text-center relative overflow-hidden border-b border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-24 -mb-24"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-black tracking-widest uppercase mb-4 border border-white/20">
                    Professional Design Brief
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading leading-tight">نموذج طلب التصميم</h1>
                  <p className="text-white/80 max-w-xl mx-auto leading-relaxed text-lg font-medium">
                    للحصول على نتائج إبداعية تتجاوز التوقعات، يرجى تعبئة البريف بكل دقة. كل تفصيلة صغيرة تصنع فارقاً كبيراً.
                  </p>
                </div>
              </div>
              
              <BriefForm onSuccess={() => setSubmitted(true)} />
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-20 bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 p-12 animate__animated animate__zoomIn">
              <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-25"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-black mb-4 text-slate-800 font-heading">تم استلام طلبك بنجاح!</h2>
              <p className="text-slate-600 mb-10 text-xl leading-relaxed font-medium px-4">
                شكراً لثقتك بـ <span className="text-primary font-black">مصعب بن حميدة</span>. لقد استلمت البريف الخاص بك، وسأقوم بمراجعته والتواصل معك قريباً لنبدأ العمل على مشروعك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-8">
                <button 
                  onClick={() => setSubmitted(false)}
                  className="flex-1 px-8 py-5 bg-primary text-white font-black rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-primary/20 active:scale-95"
                >
                  إرسال طلب جديد
                </button>
                <button 
                  onClick={() => setView('about')}
                  className="flex-1 px-8 py-5 bg-slate-100 text-slate-700 font-black rounded-2xl hover:bg-slate-200 transition-all active:scale-95"
                >
                  مشاهدة أعمالي
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="animate__animated animate__fadeIn">
            <AboutSection />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
