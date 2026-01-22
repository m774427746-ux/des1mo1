
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-right">
          <div>
            <h3 className="text-xl font-bold text-accent mb-6 font-heading">ملاحظات هامة قبل البدء</h3>
            <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-medium">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>دقة الإجابات على أسئلة البريف تؤثر بشكل مباشر على جودة التصاميم النهائية.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>أي تغيير جوهري بعد اعتماد البريف قد يتطلب وقتاً إضافياً أو تكلفة إضافية.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>يُفضّل جمع جميع الملاحظات في رد واحد لتسريع التنفيذ.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-6 font-heading">آلية العمل</h3>
            <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-medium">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>يتم تقديم التصاميم وفق المعايير المتفق عليها في البريف.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>يُسمح بعدد محدد من التعديلات (يُحدد مسبقاً).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>التعديلات خارج نطاق البريف المعتمد تُحسب كعمل إضافي.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-6 font-heading">حقوق الاستخدام</h3>
            <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-medium">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>التصاميم مخصصة للاستخدام المتفق عليه فقط.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>يحتفظ المصمم بحق عرض العمل في ملف الأعمال ما لم يُتفق على خلاف ذلك.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>بعد اعتماد التصميم، أي تعديل لاحق يُعد طلباً جديداً.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="font-bold">© {new Date().getFullYear()} جميع الحقوق محفوظة لـ <span className="text-accent">مصعب ديزاين</span>.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-accent transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
