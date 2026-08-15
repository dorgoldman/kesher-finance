/**
 * Central registry of all guide articles — single source of truth.
 * Used by the guides hub, the footer link columns, and the RelatedGuides
 * component so internal links stay consistent and every article is reachable
 * from many places (helps crawling / indexing).
 */

export interface GuideEntry {
  /** Route path */
  href: string;
  /** Full title (used on the guides hub) */
  title: string;
  /** Short label (used in footer / related lists) */
  shortLabel: string;
  /** One-line description (used on the guides hub) */
  description: string;
  /** Category bucket */
  category: 'הלוואות' | 'משכנתאות' | 'מיסוי';
}

export const GUIDES: GuideEntry[] = [
  // ─── הלוואות ───────────────────────────────────────────────
  {
    href: '/guides/halvaot-madrich',
    title: 'הלוואות - המדריך המלא לבחירה נכונה',
    shortLabel: 'איך בוחרים הלוואה',
    description: 'לפני שלוקחים הלוואה - קראו את זה. מה לבדוק, מה לא לפספס, ואיך לא לשלם יותר ממה שצריך.',
    category: 'הלוואות',
  },
  {
    href: '/guides/halvaah-hutz-bankait',
    title: 'הלוואה חוץ בנקאית - המדריך המלא',
    shortLabel: 'הלוואה חוץ בנקאית',
    description: 'כל מה שצריך לדעת על הלוואה חוץ בנקאית: מי נותן, כמה עולה, מתי כדאי ומתי לא. מדריך ישיר בלי שטויות.',
    category: 'הלוואות',
  },
  {
    href: '/guides/halvaah-miyedit',
    title: 'הלוואה מיידית - מה באמת קורה מרגע הבקשה עד קבלת הכסף',
    shortLabel: 'הלוואה מיידית',
    description: 'כמה זמן לוקחת הלוואה מיידית באמת? מה צריך להכין, מה יכול לעצור את האישור, ואיפה כדאי לפנות ב-2026.',
    category: 'הלוואות',
  },
  {
    href: '/guides/halvaah-lchol-matara',
    title: 'הלוואה לכל מטרה - מתי כדאי, מתי לא, וכמה זה עולה ב-2026',
    shortLabel: 'הלוואה לכל מטרה',
    description: 'הלוואה לכל מטרה היא הכלי הפיננסי הנפוץ ביותר בישראל. אבל היא יכולה להיות גם הטעות היקרה ביותר. המדריך המלא.',
    category: 'הלוואות',
  },
  {
    href: '/guides/halvaah-lerechev',
    title: 'הלוואה לרכב: בנק, יבואן, או ליסינג? המדריך ב-2026',
    shortLabel: 'הלוואה לרכב',
    description: 'לפני שחותמים על מימון הרכב, קראו את זה. ההבדל בין בנק ליבואן יכול לעלות לכם אלפי שקלים על אותו רכב.',
    category: 'הלוואות',
  },
  {
    href: '/guides/halvaah-lmesoravim',
    title: 'הלוואה למסורבים: מה האפשרויות האמיתיות ב-2026',
    shortLabel: 'הלוואה למסורבים',
    description: 'הבנק סרב לך? זה לא סוף הדרך. המדריך המלא לאפשרויות מימון עם BDI שלילי, כולל טיפ אחד שרוב האנשים מפספסים.',
    category: 'הלוואות',
  },
  {
    href: '/guides/gmachim-p2p',
    title: 'גמ"חים, עוגן, ו-P2P: המדריך להלוואה ללא ריבית בישראל',
    shortLabel: 'הלוואות ללא ריבית',
    description: 'יש עולם שלם של הלוואות ללא ריבית בישראל שרוב האנשים לא מכירים. גמ"חים, קרן עוגן, SparkIL ו-P2P, כל מה שצריך לדעת.',
    category: 'הלוואות',
  },
  {
    href: '/guides/halvaah-mekarhn-hashtalmut',
    title: 'הלוואה מקרן השתלמות 2026: ריבית, תנאים וכל מה שצריך לדעת',
    shortLabel: 'הלוואה מקרן השתלמות',
    description: 'הלוואה מקרן השתלמות היא אחת הזולות בשוק. אבל יש כמה דברים שחייבים להבין לפני שלוחצים אישור. המדריך המלא.',
    category: 'הלוואות',
  },
  {
    href: '/guides/rivit-efektivit',
    title: 'ריבית אפקטיבית: המספר שהבנק מעדיף שלא תסתכל עליו',
    shortLabel: 'ריבית אפקטיבית',
    description: 'הבנק הציע לך ריבית של 6%? יכול להיות שתשלם 9% בפועל. כך מבינים ריבית אפקטיבית ומשתמשים בה לטובתך.',
    category: 'הלוואות',
  },
  {
    href: '/guides/bakasha-lehalva',
    title: 'איך מגישים בקשה להלוואה ומה הבנק בודק',
    shortLabel: 'בקשה להלוואה',
    description: 'מה הבנק בודק לפני שהוא מאשר הלוואה? ולמה יש אנשים שנדחים בלי הסבר? המדריך שיעזור לך להגיש בקשה נכון בפעם הראשונה.',
    category: 'הלוואות',
  },

  // ─── משכנתאות ──────────────────────────────────────────────
  {
    href: '/guides/kama-mashkanta-lpei-maskuret',
    title: 'כמה משכנתא אפשר לקחת לפי משכורת? חישוב מלא 2026',
    shortLabel: 'כמה משכנתא לפי משכורת',
    description: 'הבנק מאשר משכנתא לפי ההכנסה שלך, לא לפי מה שאתה רוצה. כך מחשבים כמה תקבל, עם טבלאות מספרים אמיתיות לשנת 2026.',
    category: 'משכנתאות',
  },
  {
    href: '/guides/rivit-prime',
    title: 'ריבית פריים 2026: מה זה ואיך זה משפיע עליך',
    shortLabel: 'ריבית פריים',
    description: 'ריבית הפריים עלתה? ירדה? כך זה משפיע על המשכנתא וההלוואות שלך. מה זה פריים מינוס, כמה לשים בתמהיל, ומה קרה בשנים האחרונות.',
    category: 'משכנתאות',
  },
  {
    href: '/guides/spitzer-keren-shva',
    title: 'לוח שפיצר מול קרן שווה: ההשוואה האמיתית',
    shortLabel: 'שפיצר מול קרן שווה',
    description: 'שפיצר או קרן שווה? רוב האנשים לא שואלים את השאלה הנכונה. כך תדעו מה מתאים לכם, עם מספרים אמיתיים.',
    category: 'משכנתאות',
  },
  {
    href: '/guides/mashkanta-rishona',
    title: 'משכנתא ראשונה 2026: המדריך המלא לזוגות ורוכשים',
    shortLabel: 'משכנתא ראשונה',
    description: 'לוקחים משכנתא לראשונה? הון עצמי, תמהיל, זכאות, ביטוח ואיך לא להיות "טרף קל" לבנק. כל מה שצריך לדעת.',
    category: 'משכנתאות',
  },
  {
    href: '/guides/mahzor-mashkanta',
    title: 'מחזור משכנתא 2026: מתי כדאי ומה עולה לך לדעת',
    shortLabel: 'מחזור משכנתא',
    description: 'מחזור משכנתא יכול לחסוך לך עשרות אלפי שקלים. או לעלות לך ביוקר אם לא בדקת את עמלת הפירעון. המדריך המלא.',
    category: 'משכנתאות',
  },
  {
    href: '/guides/maslolei-mashkanta',
    title: 'מסלולי משכנתא 2026: המדריך המלא לתמהיל',
    shortLabel: 'מסלולי משכנתא',
    description: 'קבועה, משתנה, פריים או זכאות? כל מסלולי המשכנתא בישראל מוסברים עם דוגמה מספרית לכמה תמהיל נכון שווה.',
    category: 'משכנתאות',
  },
  {
    href: '/guides/mashkanta-lzug-tzair',
    title: 'משכנתא לזוג צעיר: הלוואת זכאות ודיור פחות יקר',
    shortLabel: 'משכנתא לזוג צעיר',
    description: 'תעודת זכאות היא הלוואה מסובסדת מממשלה לזוגות צעירים. הקדמה, דוגמה מעשית, ודוגמה לכמה תחסוך בעדיךת.',
    category: 'משכנתאות',
  },

  // ─── מיסוי ──────────────────────────────────────────────────
  {
    href: '/guides/madregot-mas-hachnasa-2026',
    title: 'מדרגות מס הכנסה 2026: הטבלה המלאה וכל מה שהשתנה',
    shortLabel: 'מדרגות מס הכנסה 2026',
    description: 'מדרגות המס השתנו ב-2026 (תיקון 288). הטבלה המלאה, מה בדיוק זז, ודוגמה מספרית לכמה זה שווה למי שמרוויח 18,000 ₪ בחודש.',
    category: 'מיסוי',
  },
];

/** All guides in a category. */
export function guidesByCategory(category: GuideEntry['category']): GuideEntry[] {
  return GUIDES.filter((g) => g.category === category);
}

/**
 * Related guides for a given article: same-category guides first, then
 * fills from the other category, excluding the current article.
 * Returns up to `limit` entries (default 5).
 */
export function relatedGuides(currentHref: string, limit = 5): GuideEntry[] {
  const current = GUIDES.find((g) => g.href === currentHref);
  const sameCategory = GUIDES.filter(
    (g) => g.href !== currentHref && g.category === current?.category
  );
  const otherCategory = GUIDES.filter(
    (g) => g.href !== currentHref && g.category !== current?.category
  );
  return [...sameCategory, ...otherCategory].slice(0, limit);
}
