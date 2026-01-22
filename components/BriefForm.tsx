
import React, { useState } from 'react';

interface BriefFormProps {
  onSuccess: () => void;
}

const BriefForm: React.FC<BriefFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  /**
   * الخطوة الأخيرة لتفعيل الإيميل:
   * 1. اذهب لموقع Formspree.io وأنشئ حساباً مجانياً.
   * 2. أنشئ "New Form" وضع إيميلك الشخصي لاستقبال الرسائل.
   * 3. انسخ الـ ID الذي سيعطيك إياه (مثلاً: mqakjzoy) وضعه في المتغير أدناه.
   */
  const FORM_ID = "mqakjzoy"; // استبدل هذا المعرف بالمعرف الخاص بك من Formspree
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORM_ID}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        onSuccess();
      } else {
        alert("تنبيه: يرجى التأكد من تفعيل الـ Form ID الصحيح في الكود ليتم الإرسال بنجاح.");
      }
    } catch (error) {
      alert("حدث خطأ أثناء الاتصال. يرجى التحقق من الإنترنت والمحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const SectionHeader = ({ num, title, icon }: { num: string, title: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4 mb-8 mt-12 first:mt-0 p-5 bg-gradient-to-l from-slate-50 to-white rounded-2xl border-r-4 border-primary shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20">
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
        type={type} 
        name={name}
        placeholder={placeholder}
        required={required}
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
        name={name}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all outline-none text-slate-800 font-medium resize-none shadow-sm"
      />
    </div>
  );

  const SelectField = ({ label, name, options, required = false }: any) => (
    <div className="space-y-2 group">
      <label className="block text-sm font-bold text-slate-700 px-1 group-focus-within:text-primary transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select 
          name={name}
          required={required}
          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all outline-none text-slate-800 font-medium appearance-none shadow-sm"
        >
          <option value="">اختر من القائمة...</option>
          {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
    </div>
  );

  const CheckboxGroup = ({ label, name, options, columns = 2 }: any) => (
    <div className="space-y-4">
      <label className="block text-sm font-bold text-slate-700 px-1">{label}</label>
      <div className={`grid grid-cols-1 sm:grid-cols-${columns} gap-4`}>
        {options.map((opt: string) => (
          <label key={opt} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 cursor-pointer hover:border-primary/30 hover:shadow-md transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <input type="checkbox" name={name} value={opt} className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer relative z-10" />
            <span className="text-base font-bold text-slate-600 group-hover:text-primary transition-colors relative z-10">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-16 space-y-16 bg-white">
      <section className="animate__animated animate__fadeIn">
        <SectionHeader num="١" title="معلومات العلامة التجارية" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/><path d="M3 9h18"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="اسم العلامة التجارية" name="اسم_العلامة" placeholder="الاسم الرسمي كما يظهر للجمهور" required />
          <InputField label="مجال النشاط" name="مجال_النشاط" placeholder="مثال: مطاعم، تقنية، عطور" required />
          <div className="md:col-span-2">
            <TextAreaField label="وصف مختصر عن العلامة" name="وصف_العلامة" placeholder="ما هي الرسالة أو القيمة التي تقدمها العلامة؟" />
          </div>
          <SelectField label="هل توجد هوية بصرية حالية؟" name="هوية_موجودة" options={["نعم (شعار، ألوان، خطوط)", "لا (بداية جديدة)"]} />
          <SelectField label="هل يوجد دليل هوية (Brand Guidelines)؟" name="دليل_الهوية" options={["نعم، سأزودك به لاحقاً", "لا، غير متوفر"]} />
          <InputField label="اسم الشخص المسؤول عن الاعتماد" name="المسؤول" placeholder="من له الكلمة النهائية في قبول العمل؟" required />
        </div>
      </section>

      <section>
        <SectionHeader num="٢" title="أهداف التصاميم" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>} />
        <div className="space-y-8">
          <CheckboxGroup label="ما الهدف الرئيسي من هذه التصاميم؟" name="الهدف_الرئيسي" options={["زيادة المبيعات", "زيادة الوعي بالعلامة", "إطلاق منتج / خدمة جديدة", "زيادة التفاعل وبناء المجتمع"]} />
          <InputField label="هل يوجد هدف ثانوي؟" name="هدف_ثانوي" placeholder="أي تفاصيل أخرى تهمك؟" />
          <InputField label="كيف ستقيس نجاح هذه التصاميم؟" name="قياس_النجاح" placeholder="نقرات، مبيعات، متابعين جدد؟" />
        </div>
      </section>

      <section>
        <SectionHeader num="٣" title="الجمهور المستهدف" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="الفئة العمرية" name="العمر" placeholder="مثال: من 20 إلى 45 سنة" />
          <InputField label="الجنس" name="الجنس" placeholder="ذكور، إناث، الكل" />
          <InputField label="الموقع الجغرافي" name="الموقع" placeholder="مدينة معينة أو دولة" />
          <SelectField label="طبيعة الجمهور" name="طبيعة_الجمهور" options={["أفراد (B2C)", "شركات ومؤسسات (B2B)"]} />
          <div className="md:col-span-2">
            <InputField label="اللغة المناسبة للجمهور" name="اللغة" placeholder="فصحى، عامية، إنجليزية، ثنائية اللغة؟" />
          </div>
        </div>
      </section>

      <section>
        <SectionHeader num="٤" title="المنصات والمقاسات" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>} />
        <div className="space-y-8">
          <CheckboxGroup label="أين سيتم النشر؟" name="المنصات" options={["Instagram", "Facebook", "X (Twitter)", "TikTok", "LinkedIn", "Snapchat"]} columns={3} />
          <CheckboxGroup label="أنواع المنشورات المطلوبة:" name="نوع_التصميم" options={["بوست ثابت", "Carousel (عدة صور)", "Story", "إعلان ممول", "ريلز / فيديو"]} columns={3} />
          <InputField label="هل توجد مقاسات مخصصة تطلبها؟" name="المقاسات" placeholder="مثال: 1080x1080 بكسل" />
        </div>
      </section>

      <section>
        <SectionHeader num="٥" title="الأسلوب البصري" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>} />
        <div className="space-y-8">
          <CheckboxGroup label="كيف تصف الانطباع المطلوب؟" name="الأسلوب" options={["عصري", "بسيط (Minimal)", "فخم / راقي", "مرح / حيوي", "رسمي / كلاسيكي"]} columns={5} />
          <InputField label="ألوان تفضلها أو يجب الالتزام بها" name="الألوان" placeholder="أرفق أكواد الألوان إن وجدت" />
          <InputField label="روابط لتصاميم تعجبك (مرجع)" name="روابط_مرجعية" placeholder="Behance, Pinterest, Instagram..." />
          <TextAreaField label="أشياء يجب تجنبها تماماً" name="محاذير" placeholder="ألوان معينة، أساليب لا تفضلها، الخ..." />
        </div>
      </section>

      <section>
        <SectionHeader num="٦" title="المحتوى والنصوص" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SelectField label="حالة المحتوى النصي" name="جاهزية_المحتوى" options={["النصوص جاهزة وسأرسلها", "أحتاج مساعدتك في كتابة المحتوى"]} />
          <InputField label="عبارة تحفيزية (CTA)" name="CTA" placeholder="مثال: اطلب الآن، اتصل بنا، زوروا موقعنا" />
          <InputField label="هاشتاقات العلامة التجارية" name="هاشتاقات" placeholder="#براند_مصعب" />
          <SelectField label="تفضيلات الصور" name="نوع_الصور" options={["صور حقيقية لمنتجاتي", "صور ستوك (Stock Photos)", "صور من توليد الذكاء الاصطناعي"]} />
        </div>
      </section>

      <section>
        <SectionHeader num="٧" title="الجدول الزمني" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="عدد التصاميم المطلوبة" name="العدد" type="number" required />
          <InputField label="تاريخ التسليم النهائي" name="التسليم" type="date" required />
          <SelectField label="سياسة التعديلات المتاحة" name="التعديلات" options={["تعديل واحد مجاني", "تعديلين مجانية", "3 تعديلات مجانية"]} />
          <InputField label="ميزانية تقريبية (اختياري)" name="الميزانية" placeholder="بالريال السعودي أو الدولار" />
        </div>
      </section>

      <div className="pt-16 border-t border-slate-100 text-center space-y-8">
        <div className="max-w-xl mx-auto p-6 bg-amber-50 rounded-3xl border border-amber-100 text-amber-900 text-sm font-bold flex items-center gap-4 text-right">
          <div className="w-10 h-10 bg-amber-200 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </div>
          <p>بضغطك على إرسال، سيتم تحويل هذه البيانات مباشرة إلى المصمم مصعب للبدء في دراسة مشروعك.</p>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="group relative w-full md:w-auto px-16 py-7 bg-primary text-white text-2xl font-black rounded-[2.5rem] shadow-2xl shadow-primary/40 hover:bg-secondary hover:-translate-y-2 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-6 overflow-hidden mx-auto"
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
              <span>إرسال الطلب لمصعب</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default BriefForm;
