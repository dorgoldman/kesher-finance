import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import MortgageCalculatorAr from '@/components/MortgageCalculatorAr';
import CalcMethodology from '@/components/CalcMethodology';
import JsonLd, { generateSEOMetadata } from '@/components/SEO';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'حاسبة القرض العقاري',
  description:
    'حاسبة قرض عقاري مجانية للسوق الإسرائيلي - اختاروا مسارات التمويل (ثابتة، متغيرة، بريم، استحقاق)، احسبوا القسط الشهري وجدول السداد الكامل.',
  canonical: '/ar/tools/mortgage-calculator',
});

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'حاسبة القرض العقاري - Maxit',
    url: `${SITE_URL}/ar/tools/mortgage-calculator`,
    description: 'حاسبة قرض عقاري مجانية باللغة العربية للسوق الإسرائيلي مع مسارات تمويل متعددة وجدول سداد مفصّل',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ILS' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    inLanguage: 'ar',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${SITE_URL}/ar` },
      { '@type': 'ListItem', position: 2, name: 'الأدوات', item: `${SITE_URL}/ar/tools` },
      { '@type': 'ListItem', position: 3, name: 'حاسبة القرض العقاري' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'كيف يُحسب القسط الشهري للقرض العقاري؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'يُحسب القسط الشهري بطريقة شبيتسر (أقساط متساوية): القسط = الأصل × (الفائدة الشهرية × (1 + الفائدة الشهرية)^عدد الأقساط) ÷ ((1 + الفائدة الشهرية)^عدد الأقساط − 1). مثلاً، قرض بقيمة ₪1,000,000 لمدة 25 سنة بفائدة 5.5% = قسط شهري حوالي ₪6,141.',
        },
      },
      {
        '@type': 'Question',
        name: 'ما هي مسارات القرض العقاري في إسرائيل؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'هناك 4 مسارات رئيسية: فائدة ثابتة غير مربوطة (استقرار كامل)، فائدة متغيرة كل 5 سنوات (أقل بالبداية لكن قد ترتفع)، بريم (مربوطة بفائدة بنك إسرائيل، مرنة للسداد المبكر)، واستحقاق (قرض مدعوم من الدولة بفائدة منخفضة).',
        },
      },
      {
        '@type': 'Question',
        name: 'ما هو التركيب الأمثل للقرض العقاري؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'التركيب الذكي يوزع المخاطر: ثلث فائدة ثابتة (استقرار)، ثلث بريم (مرونة للسداد المبكر)، وثلث فائدة متغيرة (توفير). تأكدوا أن القسط الشهري لا يتجاوز 30% من الدخل الصافي.',
        },
      },
    ],
  },
];

export default function ArabicMortgageCalculatorPage() {
  return (
    <div className="container-page py-10 font-[var(--font-cairo)]" lang="ar" dir="rtl">
      {jsonLd.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      <Breadcrumbs
        items={[
          { label: 'الأدوات', href: '/ar/tools' },
          { label: 'حاسبة القرض العقاري' },
        ]}
      />

      <div>
        <div className="mb-8">
          <h1 className="section-title mb-3">حاسبة القرض العقاري</h1>
          <p className="text-accent-500 leading-relaxed">
            ركّبوا تركيبة القرض العقاري من عدة مسارات - فائدة ثابتة، متغيرة،
            بريم واستحقاق. الحاسبة تحسب القسط الشهري الإجمالي وتعرض جدول
            سداد مشترك لجميع المسارات.
          </p>
          <p className="text-sm text-primary-600 mt-3 font-medium">
            الحاسبة الأولى من نوعها باللغة العربية للسوق الإسرائيلي
          </p>
        </div>

        <MortgageCalculatorAr />

        <CalcMethodology
          formula="لكل مسار: القسط الشهري = الأصل × (الفائدة الشهرية × (1 + الفائدة الشهرية)^عدد الأقساط) ÷ ((1 + الفائدة الشهرية)^عدد الأقساط − 1). القسط الشهري الإجمالي هو مجموع الأقساط من جميع المسارات."
          assumptions={[
            'فائدة البريم الأساسية: 6.5% (بنك إسرائيل، 2026)',
            'الحساب بطريقة شبيتسر (أقساط متساوية)',
            'الفائدة الشهرية = الفائدة السنوية ÷ 12',
            'بدون احتساب غرامات السداد المبكر',
          ]}
          source="بيانات فائدة البريم: بنك إسرائيل"
          locale="ar"
        />

        <AdSlot variant="post-results-mobile" className="mt-6" />

        <section className="mt-14 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-accent-900 mb-3">ما هي تركيبة القرض العقاري؟</h2>
            <p className="text-accent-500 leading-relaxed">
              تركيبة القرض العقاري هي مزيج من عدة مسارات تمويل تشكّل القرض العقاري.
              كل مسار يتميز بنوع فائدة مختلف، مدة مختلفة ومبلغ مختلف.
              التركيبة الذكية توزع المخاطر ويمكن أن توفر لكم عشرات آلاف الشواقل.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent-900 mb-3">أنواع المسارات</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card border-blue-100 bg-blue-50/40">
                <h3 className="font-bold text-accent-800 mb-2">فائدة ثابتة غير مربوطة</h3>
                <p className="text-sm text-accent-500">فائدة ثابتة طوال المدة. استقرار كامل في القسط الشهري، مناسبة لمن لا يحب المخاطرة.</p>
              </div>
              <div className="card border-amber-100 bg-amber-50/40">
                <h3 className="font-bold text-accent-800 mb-2">فائدة متغيرة</h3>
                <p className="text-sm text-accent-500">تُحدَّث كل 5 سنوات. عادةً أقل بالبداية، لكن قد ترتفع مع الوقت.</p>
              </div>
              <div className="card border-violet-100 bg-violet-50/40">
                <h3 className="font-bold text-accent-800 mb-2">بريم</h3>
                <p className="text-sm text-accent-500">مربوطة بفائدة البريم لبنك إسرائيل. مرنة للسداد المبكر، تتغير مع السوق.</p>
              </div>
              <div className="card border-emerald-100 bg-emerald-50/40">
                <h3 className="font-bold text-accent-800 mb-2">استحقاق</h3>
                <p className="text-sm text-accent-500">قرض مدعوم للمستحقين. فائدة منخفضة وشروط مميزة من الدولة.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent-900 mb-3">نصائح لتركيبة ذكية</h2>
            <ul className="space-y-3 text-accent-500">
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">01</span>
                <span>تأكدوا أن القسط الشهري الإجمالي لا يتجاوز 30% من الدخل الصافي</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">02</span>
                <span>ادمجوا مسار بريم (مرونة للسداد) مع مسار ثابت (استقرار)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">03</span>
                <span>قارنوا عروض من 3 بنوك على الأقل قبل الالتزام</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">04</span>
                <span>خذوا بالحسبان تكاليف إضافية - مُقيِّم، محامي، تأمين قرض عقاري</span>
              </li>
            </ul>
          </div>

          <div className="card bg-primary-50/50 border-primary-200">
            <h2 className="text-lg font-bold text-accent-900 mb-3">مثال عملي</h2>
            <p className="text-accent-500 leading-relaxed mb-2">
              قرض عقاري بقيمة ₪1,000,000 لمدة 25 سنة بفائدة 5.5% بطريقة شبيتسر = قسط شهري ₪6,141.
              على مدار القرض ستدفعون ₪842,300 فوائد فوق الأصل.
            </p>
            <p className="text-accent-500 leading-relaxed">
              بتقسيم نفس المبلغ إلى ثلث ثابتة (5.5%)، ثلث بريم (6% - 0.5% = 5.5%)، وثلث متغيرة (4.5%)
              يمكنكم توفير حتى ₪50,000-₪80,000 من إجمالي الفوائد.
            </p>
          </div>
        </section>

        <div className="mt-10 p-4 bg-accent-50 rounded-xl border border-accent-200 text-sm text-accent-500 leading-relaxed">
          <p className="font-bold mb-1">هذا ليس استشارة مالية.</p>
          <p>المعلومات في الموقع هي لأغراض تعليمية فقط. قبل أي قرار مالي، استشيروا صاحب رخصة.</p>
        </div>

        <AdSlot variant="bottom" className="mt-10" />
      </div>
    </div>
  );
}
