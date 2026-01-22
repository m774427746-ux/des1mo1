
import React, { useState } from 'react';

interface BriefFormProps {
  onSuccess: () => void;
}

const BriefForm: React.FC<BriefFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  /**
   * الخطوة الأخيرة لمصعب:
   * 1. اذهب لموقع Formspree.io
   * 2. أنشئ نموذج جديد واحصل على الـ ID الخاص به (مثال: mqakjzoy)
   * 3. استبدل النص "mqakjzoy" أدناه بالكود الخاص بك.
   */
  const FORM_ID = "mqakjzoy"; // ضع هنا الكود الذي حصلت عليه من Formspree
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
        const errorData = await response.json();
        console.error("Formspree error details:", errorData);
        alert("حدث خطأ في الإرسال. تأكد من أنك قمت بتفعيل الـ Form ID الصحيح في الكود.");
      }
    } catch (error) {
      console.error("Submission network error:", error);
      alert("تعذر الاتصال بالخادم. تأكد من اتصال الإنترنت وحاول مجدداً.");
    } finally {
      setLoading(false);
    }
  };

  const SectionHeader = ({ num, title, icon }: { num: string, title: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4 mb-8 mt-12 first:mt-0 p-4 bg-slate-50 rounded-2xl border-r-4 border-primary">
      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-black text-lg shadow-md">
        {num}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <h3 className="text-xl font-black text-slate-800 font-heading">{title}</h3>
      </div>
    </div>
  );

  const InputField = ({ label, name, type = "text", placeholder, required = false }: any) => (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-slate-700 px-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium shadow-sm"
      />
    </div>
  );

  const TextAreaField = ({ label, name, placeholder, required = false }: any) => (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-slate-700 px-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea 
        name={name}
        placeholder={placeholder}
        required={required}
        rows={3}
        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium resize-none shadow-sm"
      />
    </div>
  );

  const SelectField = ({ label, name, options, required = false }: any) => (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-slate-700 px-1">{label} {required && <span className="text-red-500">*</span>}</label>
      <select 
        name={name}
        required={required}
        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-800 font-medium appearance-none shadow-sm"
      >
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
            <input type="checkbox" name={name} value={opt} className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" />
            <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-12 bg-white">
      <section>
        <SectionHeader num="١" title="معلومات العلامة التجارية" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/><path d="M3 9h18"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="اسم العلامة التجارية" name="اسم_العلامة" placeholder="الاسم الرسمي" required />
          <InputField label="مجال النشاط" name="مجال_النشاط" placeholder="مثال: مطاعم، عقارات، عطور" required />
          <div className="md:col-span-2">
            <TextAreaField label="وصف مختصر عن العلامة" name="وصف_العلامة" placeholder="ماذا تقدم العلامة التجارية؟" />
          </div>
          <SelectField label="هل توجد هوية بصرية حالية؟" name="هوية_موجودة" options={["نعم", "لا"]} />
          <SelectField label="هل يوجد دليل هوية (Brand Guidelines)؟" name="دليل_الهوية" options={["نعم متوفر", "لا يوجد"]} />
          <InputField label="اسم الشخص المسؤول عن الاعتماد" name="المسؤول" placeholder="من سيعتمد التصاميم النهائية؟" required />
        </div>
      </section>

      <section>
        <SectionHeader num="٢" title="أهداف التصاميم" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>} />
        <div className="space-y-6">
          <CheckboxGroup label="ما الهدف الرئيسي من التصاميم؟" name="الهدف_الرئيسي" options={["زيادة المبيعات", "زيادة الوعي بالعلامة", "إطلاق منتج / خدمة", "زيادة التفاعل"]} />
          <InputField label="هل يوجد هدف ثانوي؟" name="هدف_ثانوي" placeholder="أي أهداف إضافية تود تحقيقها؟" />
          <InputField label="كيف سيتم قياس نجاح التصاميم؟" name="قياس_النجاح" placeholder="نقرات، مبيعات، تفاعل؟" />
        </div>
      </section>

      <section>
        <SectionHeader num="٣" title="الجمهور المستهدف" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="الفئة العمرية" name="العمر" placeholder="مثال: 18-35" />
          <InputField label="الجنس" name="الجنس" placeholder="ذكر، أنثى، الكل" />
          <InputField label="الموقع الجغرافي" name="الموقع" placeholder="المدينة أو المنطقة" />
          <SelectField label="طبيعة الجمهور" name="طبيعة_الجمهور" options={["أفراد (B2C)", "شركات (B2B)"]} />
          <div className="md:col-span-2">
            <InputField label="اللغة المناسبة للجمهور" name="اللغة" placeholder="فصحى، عامية، إنجليزية؟" />
          </div>
        </div>
      </section>

      <section>
        <SectionHeader num="٤" title="المنصات والمقاسات" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>} />
        <div className="space-y-6">
          <CheckboxGroup label="المنصات المستهدفة:" name="المنصات" options={["Instagram", "Facebook", "X", "TikTok", "LinkedIn", "Snapchat"]} columns={3} />
          <CheckboxGroup label="أنواع التصاميم المطلوبة:" name="نوع_التصميم" options={["بوست ثابت", "Carousel", "Story", "إعلان ممول", "ريلز"]} columns={3} />
          <InputField label="هل توجد مقاسات محددة مطلوبة؟" name="المقاسات" placeholder="مثال: 1080x1350" />
        </div>
      </section>

      <section>
        <SectionHeader num="٥" title="الأسلوب البصري" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>} />
        <div className="space-y-6">
          <CheckboxGroup label="الأسلوب المطلوب:" name="الأسلوب" options={["عصري", "بسيط", "فخم", "مرح", "رسمي"]} columns={5} />
          <InputField label="ألوان مفضلة أو إلزامية" name="الألوان" placeholder="أكواد الألوان إن وجدت" />
          <InputField label="خطوط مفضلة" name="الخطوط" />
          <InputField label="تصاميم مرجعية (روابط)" name="روابط_مرجعية" placeholder="Behance, Pinterest..." />
          <TextAreaField label="عناصر أو أساليب يجب تجنبها" name="محاذير" placeholder="ماذا لا تود رؤيته؟" />
        </div>
      </section>

      <section>
        <SectionHeader num="٦" title="المحتوى والنصوص" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField label="حالة المحتوى النصي" name="جاهزية_المحتوى" options={["جاهز", "مطلوب كتابته"]} />
          <InputField label="هل يوجد CTA محدد؟" name="CTA" placeholder="مثال: اطلب الآن، اكتشف المزيد" />
          <InputField label="هل توجد هاشتاقات ثابتة؟" name="هاشتاقات" placeholder="#براند" />
          <SelectField label="نوع الصور المستخدمة" name="نوع_الصور" options={["صور حقيقية", "صور ستوك", "صور توليدية"]} />
        </div>
      </section>

      <section>
        <SectionHeader num="٧" title="الجدول الزمني" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="عدد التصاميم المطلوبة" name="العدد" type="number" required />
          <InputField label="مدة التنفيذ" name="المدة" placeholder="مثال: 5 أيام" />
          <InputField label="تاريخ التسليم النهائي" name="التسليم" type="date" required />
          <SelectField label="عدد التعديلات المتاحة" name="التعديلات" options={["تعديل واحد", "تعديلين", "3 تعديلات"]} />
        </div>
      </section>

      <section>
        <SectionHeader num="٨" title="ملاحظات قانونية وإدارية" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>} />
        <div className="space-y-6">
          <TextAreaField label="هل توجد شروط قانونية يجب ذكرها؟" name="شروط_قانونية" placeholder="أرقام تراخيص، تنبيهات..." />
          <SelectField label="غرض الاستخدام" name="غرض_الاستخدام" options={["عضوي فقط", "إعلانات ممولة"]} />
          <SelectField label="هل يُسمح بعرض العمل في ملف الأعمال؟" name="سماح_بالعرض" options={["نعم مسموح", "غير مسموح"]} required />
        </div>
      </section>

      <section>
        <SectionHeader num="٩" title="ملاحظات مهمة قبل البدء" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>} />
        <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-4 text-sm font-medium leading-relaxed text-right" dir="rtl">
          <p className="flex items-start gap-3">
            <span className="text-accent text-lg">●</span>
            تعتمد جودة التصاميم النهائية على دقة ووضوح هذا البريف.
          </p>
          <p className="flex items-start gap-3">
            <span className="text-accent text-lg">●</span>
            أي تعديل جوهري بعد اعتماد البريف قد يتطلب وقتاً أو تكلفة إضافية.
          </p>
          <p className="flex items-start gap-3">
            <span className="text-accent text-lg">●</span>
            يُرجى جمع جميع الملاحظات في رد واحد لتسهيل وتسريع التنفيذ.
          </p>
        </div>
      </section>

      <div className="pt-10 border-t border-slate-100 text-center">
        <button 
          type="submit" 
          disabled={loading}
          className="group relative w-full md:w-auto px-20 py-6 bg-primary text-white text-xl font-black rounded-[2rem] shadow-2xl shadow-primary/30 hover:bg-secondary hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 inline-flex items-center justify-center gap-4 overflow-hidden"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>جاري إرسال البريف...</span>
            </>
          ) : (
            <>
              <span>إرسال البريف لمصعب</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default BriefForm;
