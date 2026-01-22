
import React from 'react';

const AboutSection: React.FC = () => {
  const SkillBadge = ({ children, icon }: { children: React.ReactNode, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 group animate__animated animate__fadeInUp">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
        {icon}
      </div>
      <span className="font-bold text-slate-800 dark:text-slate-200 text-base font-heading">{children}</span>
    </div>
  );

  const SectionTitle = ({ icon, title, color = "bg-primary" }: { icon: React.ReactNode, title: string, color?: string }) => (
    <div className="flex items-center gap-4 mb-10">
      <div className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center shadow-lg shadow-primary/20 animate__animated animate__zoomIn`}>
        {icon}
      </div>
      <h3 className="text-3xl font-black text-slate-900 dark:text-white font-heading tracking-tight">{title}</h3>
    </div>
  );

  const StepItem = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
    <div className="relative p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-lg hover:border-primary/20 transition-all group">
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transform group-hover:rotate-12 transition-transform">
        {num}
      </div>
      <h4 className="text-xl font-black text-slate-800 dark:text-white mb-3 font-heading">{title}</h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-10 pb-24">
      {/* Hero Header */}
      <div className="bg-white dark:bg-darkCard luxury-shadow rounded-[4rem] overflow-hidden border border-slate-100 dark:border-slate-800 animate__animated animate__fadeInDown transition-colors">
        <div className="bg-secondary p-12 md:p-24 text-white relative flex flex-col items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-accent font-black text-xs tracking-widest uppercase">
              Creative Partner
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-4 font-heading leading-tight">مصعب بن حميدة</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-300">Graphic Designer & Branding Expert</h2>
            
            <div className="pt-10">
              <a href="https://www.behance.net/musabdes" target="_blank" className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-white font-black rounded-2xl hover:bg-accent transition-all shadow-2xl shadow-primary/40">
                مشاهدة معرض أعمالي (Behance)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* رحلة العمل - طريقة الاستخدام */}
      <div className="bg-slate-50 dark:bg-slate-900/50 p-12 rounded-[4rem] animate__animated animate__fadeIn transition-colors">
        <SectionTitle 
          title="رحلة العمل: من الفكرة إلى التنفيذ" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 17-5 5-5-5"/><path d="m7 7 5-5 5 5"/></svg>} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepItem num="١" title="تعبئة البريف" desc="تبدأ الرحلة بتعبئتك للنموذج بدقة، لنتعرف على هوية مشروعك وأهدافك بوضوح." />
          <StepItem num="٢" title="تحليل المتطلبات" desc="أقوم بدراسة معلوماتك وتحليل السوق المنافس لبناء استراتيجية بصرية مناسبة." />
          <StepItem num="٣" title="التنفيذ الإبداعي" desc="هنا يبدأ السحر! أقوم بتحويل الكلمات إلى تصاميم احترافية تخطف الأنظار." />
          <StepItem num="٤" title="المراجعة والتسليم" desc="نراجع العمل معاً، نجري التعديلات اللازمة، ثم نسلمك الملفات بأعلى جودة." />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <div className="bg-white dark:bg-darkCard p-12 rounded-[3.5rem] luxury-shadow border border-slate-100 dark:border-slate-800 transition-colors">
            <SectionTitle title="الرؤية الإبداعية" icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>} />
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              أعمل كشريك نجاح للمشاريع التي تطمح للتميز. خبرتي في التعامل مع كبرى الشركات مثل "الدرة الوطنية" و"شاي لجة" جعلتني أدرك أن التصميم ليس مجرد شكل، بل هو أداة بيع قوية.
            </p>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-secondary p-10 rounded-[3.5rem] text-white">
            <h3 className="text-2xl font-black mb-10 font-heading">المهارات</h3>
            <div className="space-y-4">
              <SkillBadge icon="🎨">بناء الهويات التجارية</SkillBadge>
              <SkillBadge icon="📱">تصاميم السوشيال ميديا</SkillBadge>
              <SkillBadge icon="🤖">التصميم بالذكاء الاصطناعي</SkillBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
