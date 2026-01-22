
import React, { useState } from 'react';

interface BriefFormProps {
  onSuccess: () => void;
}

const BriefForm: React.FC<BriefFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  // ملاحظة لمصعب: استبدل "mqakjzoy" بالكود الذي ستحصل عليه من Formspree.io
  const FORM_ID = "mqakjzoy"; 
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORM_ID}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        onSuccess();
      } else {
        alert("يرجى التأكد من ضبط Form ID الصحيح في الكود لاستلام البيانات.");
      }
    } catch (error) {
      alert("حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const SectionHeader = ({ num, title, icon }: { num: string, title: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4 mb-8 mt-12 first:mt-0 p-5 bg-gradient-to-l from-slate-50 to-white rounded-2xl border-r-4 border-primary shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg">
        {num}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-primary opacity-80">{icon}</span>
        <h3 className="text-2xl font-black text-slate-800 font-heading tracking-tight">{title}</h3>
      </div>
    </div>
  );

  const InputField = ({ label, name, type = "text", placeholder, required = false }: any) => (
    <div className="space-y-2 group">
      <label className="block text-sm font-bold text-slate-700 px-1 group-focus-within:text-primary transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type} name={name} placeholder={placeholder} required={required}
        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all outline-none text-slate-800 font-medium shadow-sm"
      />
    </div>
  );

  const TextAreaField = ({ label, name, placeholder, required = false }: any) => (
    <div className="space-y-2 group">
      <label className="block text-sm font-bold text-slate-700 px-1 group-focus-within:text-primary transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea 
        name={name} placeholder={placeholder} required={required} rows={3}
        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all outline-none text-slate-800 font-medium resize-none shadow-sm"
      />
    </div>
  );

  const SelectField = ({ label, name, options, required = false }: any) => (
    <div className="space-y-2 group">
      <label className="block text-sm font-bold text-slate-700 px-1 group-focus-within:text-primary transition-colors">{label}</label>
      <select name={name} required={required} className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all outline-none text-slate-800 font-medium appearance-none shadow-sm">
        <option value="">اختر من القائمة...</option>
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );

  const CheckboxGroup = ({ label, name, options, columns = 2 }: any) => (
    <div className="space-y-4">
      <label className="block text-sm font-bold text-slate-700 px-1">{label}</label>
      <div className={`grid grid-cols-1 sm:grid-cols-${columns} gap-3`}>
        {options.map((opt: string) => (
          <label key={opt} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 cursor-pointer hover:border-primary/30 hover:bg-primary/5 transition-all group shadow-sm">
            <input type="checkbox" name={name} value={opt} className="w-5 h-5 rounded border-slate-300 text-primary" />
            <span className="text-sm font-bold text-slate-600 group-hover:text-primary">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-16 space-y-16 bg-white">
      {/* 1. العلامة التجارية */}
      <section>
        <SectionHeader num="١" title="معلومات العلامة التجارية" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/><path d="M3 9h18"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="اسم العلامة التجارية الرسمي" name="اسم_العلامة" placeholder="مثال: شركة الدرة الوطنية" required />
          <InputField label="مجال العمل الأساسي" name="مجال_النشاط" placeholder="عطور، مطاعم، تقنية..." required />
          <div className="md:col-span-2">
            <TextAreaField label="هل توجد هوية بصرية حالية؟" name="الهوية_الحالية" placeholder="اذكر الشعار، الألوان، الخطوط الحالية إن وجدت" />
          </div>
          <SelectField label="هل هناك دليل هوية Brand Guidelines؟" name="دليل_الهوية" options={["نعم متوفر", "لا يوجد"]} />
          <InputField label="اسم الشخص المسؤول عن الموافقة النهائية" name="المسؤول" placeholder="من سيعتمد التصاميم؟" required />
        </div>
      </section>

      {/* 2. أهداف التصاميم */}
      <section>
        <SectionHeader num="٢" title="أهداف التصاميم" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>} />
        <div className="space-y-8">
          <CheckboxGroup label="ما الهدف الرئيسي من التصاميم؟" name="الأهداف" options={["زيادة المبيعات", "زيادة الوعي بالعلامة", "إطلاق منتج جديد", "التفاعل وبناء المجتمع"]} />
          <InputField label="هل يوجد هدف ثانوي؟" name="هدف_ثانوي" placeholder="أي هدف إضافي؟" />
          <SelectField label="كيف ستُقاس نجاح هذه التصاميم؟" name="قياس_النجاح" options={["تفاعل (Likes/Comments)", "نقرات (Clicks)", "مبيعات (Sales)", "وصول (Reach)"]} />
        </div>
      </section>

      {/* 3. الجمهور المستهدف */}
      <section>
        <SectionHeader num="٣" title="الجمهور المستهدف" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="من هو الجمهور؟ (عمر - جنس - موقع)" name="الجمهور" placeholder="مثال: نساء 20-40 في الرياض" />
          <SelectField label="نوع الجمهور" name="نوع_الجمهور" options={["أفراد B2C", "شركات B2B"]} />
          <TextAreaField label="ما المشكلة التي يخاطبها المحتوى؟" name="المشكلة_المخاطبة" placeholder="ما هي حاجة العميل التي سنلبيها؟" />
          <SelectField label="اللغة المناسبة" name="اللغة" options={["لغة عربية فصحى", "لهجة عامية", "ثنائية اللغة (عربي/إنجليزي)"]} />
        </div>
      </section>

      {/* 4. المنصات والمقاسات */}
      <section>
        <SectionHeader num="٤" title="المنصات والمقاسات" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>} />
        <div className="space-y-8">
          <CheckboxGroup label="على أي منصات ستُنشر التصاميم؟" name="المنصات" options={["Instagram", "Facebook", "X (Twitter)", "TikTok", "LinkedIn", "Snapchat"]} columns={3} />
          <CheckboxGroup label="ما أنواع المنشورات المطلوبة؟" name="أنواع_المنشورات" options={["بوست ثابت", "كاروسيل (Carousel)", "Story", "إعلان ممول"]} columns={2} />
          <InputField label="هل هناك مقاسات محددة مطلوبة؟" name="مقاسات_خاصة" placeholder="مثال: 1080x1350" />
        </div>
      </section>

      {/* 5. الأسلوب البصري */}
      <section>
        <SectionHeader num="٥" title="الأسلوب البصري" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>} />
        <div className="space-y-8">
          <CheckboxGroup label="كيف تصف الأسلوب المطلوب؟" name="الأسلوب" options={["عصري", "بسيط", "فخم", "مرح", "رسمي"]} columns={5} />
          <InputField label="هل توجد تصاميم مرجعية تعجبك؟" name="تصاميم_مرجعية" placeholder="روابط Behance أو Pinterest" />
          <InputField label="ألوان أو عناصر يجب الالتزام بها" name="التزامات_بصرية" />
          <TextAreaField label="أشياء يجب تجنبها تماماً" name="محاذير" placeholder="ألوان مرفوضة أو أساليب معينة" />
        </div>
      </section>

      {/* 6. المحتوى والنصوص */}
      <section>
        <SectionHeader num="٦" title="المحتوى والنصوص" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SelectField label="حالة المحتوى النصي" name="حالة_المحتوى" options={["المحتوى جاهز", "مطلوب كتابة المحتوى"]} />
          <InputField label="هل يوجد CTA محدد؟" name="CTA" placeholder="مثال: اطلب الآن، تواصل معنا" />
          <InputField label="هل توجد هاشتاقات ثابتة؟" name="هاشتاقات" />
          <SelectField label="نوع الصور المستخدمة" name="مصدر_الصور" options={["صور حقيقية", "صور ستوك / توليدية"]} />
        </div>
      </section>

      {/* 7. الجدول الزمني */}
      <section>
        <SectionHeader num="٧" title="الجدول الزمني والتسليم" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="عدد التصاميم المطلوبة" name="عدد_التصاميم" type="number" required />
          <InputField label="تاريخ التسليم النهائي المتوقع" name="التاريخ_النهائي" type="date" required />
          <SelectField label="عدد التعديلات المتاحة" name="عدد_التعديلات" options={["تعديل واحد", "تعديلين", "3 تعديلات"]} />
          <InputField label="مدة المشروع التقديرية" name="مدة_المشروع" placeholder="مثال: أسبوع" />
        </div>
      </section>

      {/* 8. أمور قانونية */}
      <section>
        <SectionHeader num="٨" title="أمور قانونية وإدارية" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>} />
        <div className="space-y-8">
          <TextAreaField label="شروط قانونية يجب ذكرها؟" name="شروط_قانونية" />
          <SelectField label="غرض الاستخدام" name="غرض_الاستخدام" options={["استخدام عضوي فقط", "إعلانات ممولة"]} />
          <SelectField label="هل يُسمح بعرض العمل في معرض أعمالي؟" name="سماح_بالعرض" options={["نعم مسموح", "غير مسموح"]} />
        </div>
      </section>

      <div className="pt-16 border-t border-slate-100 text-center">
        <button 
          type="submit" 
          disabled={loading}
          className="group relative w-full md:w-auto px-20 py-7 bg-primary text-white text-2xl font-black rounded-[2.5rem] shadow-2xl shadow-primary/40 hover:bg-secondary hover:-translate-y-2 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-6 mx-auto overflow-hidden"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-8 w-8 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>جاري الإرسال...</span>
            </>
          ) : (
            <>
              <span>إرسال البريف الاحترافي</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default BriefForm;
