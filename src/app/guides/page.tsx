import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מדריכים פיננסיים',
  description: 'מדריכים מקצועיים בעברית על משכנתאות, הלוואות, חיסכון, השקעות וניהול כספים',
  canonical: '/guides',
});

const guides: { title: string; description: string; href: string; category: string }[] = [
  {
    title: 'הלוואות - המדריך המלא לבחירה נכונה',
    description: 'לפני שלוקחים הלוואה - קראו את זה. מה לבדוק, מה לא לפספס, ואיך לא לשלם יותר ממה שצריך.',
    href: '/guides/halvaot-madrich',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה חוץ בנקאית - המדריך המלא',
    description: 'כל מה שצריך לדעת על הלוואה חוץ בנקאית: מי נותן, כמה עולה, מתי כדאי ומתי לא. מדריך ישיר בלי שטויות.',
    href: '/guides/halvaah-hutz-bankait',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה מיידית - מה באמת קורה מרגע הבקשה עד קבלת הכסף',
    description: 'כמה זמן לוקחת הלוואה מיידית באמת? מה צריך להכין, מה יכול לעצור את האישור, ואיפה כדאי לפנות ב-2026.',
    href: '/guides/halvaah-miyedit',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה לכל מטרה - מתי כדאי, מתי לא, וכמה זה עולה ב-2026',
    description: 'הלוואה לכל מטרה היא הכלי הפיננסי הנפוץ ביותר בישראל. אבל היא יכולה להיות גם הטעות היקרה ביותר. המדריך המלא.',
    href: '/guides/halvaah-lchol-matara',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה לרכב: בנק, יבואן, או ליסינג? המדריך ב-2026',
    description: 'לפני שחותמים על מימון הרכב, קראו את זה. ההבדל בין בנק ליבואן יכול לעלות לכם אלפי שקלים על אותו רכב.',
    href: '/guides/halvaah-lerechev',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה למסורבים: מה האפשרויות האמיתיות ב-2026',
    description: 'הבנק סרב לך? זה לא סוף הדרך. המדריך המלא לאפשרויות מימון עם BDI שלילי, כולל טיפ אחד שרוב האנשים מפספסים.',
    href: '/guides/halvaah-lmesoravim',
    category: 'הלוואות',
  },
  {
    title: 'גמ"חים, עוגן, ו-P2P: המדריך להלוואה ללא ריבית בישראל',
    description: 'יש עולם שלם של הלוואות ללא ריבית בישראל שרוב האנשים לא מכירים. גמ"חים, קרן עוגן, SparkIL ו-P2P, כל מה שצריך לדעת.',
    href: '/guides/gmachim-p2p',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה מקרן השתלמות 2026: ריבית, תנאים וכל מה שצריך לדעת',
    description: 'הלוואה מקרן השתלמות היא אחת הזולות בשוק. אבל יש כמה דברים שחייבים להבין לפני שלוחצים אישור. המדריך המלא.',
    href: '/guides/הלוואה-מקרן-השתלמות',
    category: 'הלוואות',
  },
  {
    title: 'ריבית אפקטיבית: המספר שהבנק מעדיף שלא תסתכל עליו',
    description: 'הבנק הציע לך ריבית של 6%? יכול להיות שתשלם 9% בפועל. כך מבינים ריבית אפקטיבית ומשתמשים בה לטובתך.',
    href: '/guides/ריבית-אפקטיבית',
    category: 'הלוואות',
  },
  {
    title: 'איך מגישים בקשה להלוואה ומה הבנק בודק',
    description: 'מה הבנק בודק לפני שהוא מאשר הלוואה? ולמה יש אנשים שנדחים בלי הסבר? המדריך שיעזור לך להגיש בקשה נכון בפעם הראשונה.',
    href: '/guides/בקשה-להלוואה',
    category: 'הלוואות',
  },
  {
    title: 'כמה משכנתא אפשר לקחת לפי משכורת? חישוב מלא 2026',
    description: 'הבנק מאשר משכנתא לפי ההכנסה שלך, לא לפי מה שאתה רוצה. כך מחשבים כמה תקבל, עם טבלאות מספרים אמיתיות לשנת 2026.',
    href: '/guides/כמה-משכנתא-לפי-משכורת',
    category: 'משכנתאות',
  },
  {
    title: 'ריבית פריים 2026: מה זה ואיך זה משפיע עליך',
    description: 'ריבית הפריים עלתה? ירדה? כך זה משפיע על המשכנתא וההלוואות שלך. מה זה פריים מינוס, כמה לשים בתמהיל, ומה קרה בשנים האחרונות.',
    href: '/guides/ריבית-פריים',
    category: 'משכנתאות',
  },
  {
    title: 'לוח שפיצר מול קרן שווה: ההשוואה האמיתית',
    description: 'שפיצר או קרן שווה? רוב האנשים לא שואלים את השאלה הנכונה. כך תדעו מה מתאים לכם, עם מספרים אמיתיים.',
    href: '/guides/שפיצר-מול-קרן-שווה',
    category: 'משכנתאות',
  },
  {
    title: 'משכנתא ראשונה 2026: המדריך המלא לזוגות ורוכשים',
    description: 'לוקחים משכנתא לראשונה? הון עצמי, תמהיל, זכאות, ביטוח ואיך לא להיות "טרף קל" לבנק. כל מה שצריך לדעת.',
    href: '/guides/משכנתא-ראשונה',
    category: 'משכנתאות',
  },
  {
    title: 'מחזור משכנתא 2026: מתי כדאי ומה עולה לך לדעת',
    description: 'מחזור משכנתא יכול לחסוך לך עשרות אלפי שקלים. או לעלות לך ביוקר אם לא בדקת את עמלת הפירעון. המדריך המלא.',
    href: '/guides/מחזור-משכנתא',
    category: 'משכנתאות',
  },
];

export default function GuidesHub() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: 'מדריכים' }]} />

      <h1 className="section-title mb-2">מדריכים פיננסיים</h1>
      <p className="section-subtitle mb-10">
        מדריכים מקיפים בעברית להבנת נושאים פיננסיים חשובים
      </p>

      <AdSlot variant="header" className="mb-10" />

      {guides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-interactive group" style={{ padding: '28px' }}>
              <span className="badge-primary mb-4 inline-block">{guide.category}</span>
              <h2 className="text-lg font-bold text-accent-900 mb-2 leading-snug">
                {guide.title}
              </h2>
              <p className="text-sm leading-relaxed mb-3.5" style={{ color: '#6B675D' }}>{guide.description}</p>
              <span className="link-arrow text-sm">קרא עוד ←</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card text-center py-16">
          <p className="text-accent-400 text-lg mb-2">מדריכים חדשים יתווספו בקרוב</p>
          <p className="text-accent-300 text-sm">עקבו אחרינו לעדכונים</p>
        </div>
      )}
    </div>
  );
}
