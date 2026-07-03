export interface MortgageLabels {
  locale: 'he' | 'ar';
  trackTypes: {
    fixed: { label: string; description: string };
    variable: { label: string; description: string };
    prime: { label: string; description: string };
    eligibility: { label: string; description: string };
  };
  inputs: {
    amount: string;
    years: string;
    annualRate: string;
    primeRate: string;
    primeSpread: string;
    effectiveRate: string;
    showPrimeDetails: string;
    hidePrimeDetails: string;
    primeDetailsTitle: string;
    primeTooltip: string;
  };
  hints: {
    fixed: { amount: string; years: string; rate: string };
    variable: { amount: string; years: string; rate: string };
    prime: { amount: string; years: string; rate: string };
    eligibility: { amount: string; years: string; rate: string };
  };
  errors: {
    amountMin: string;
    amountMax: string;
    rateMin: string;
    rateMax: string;
    yearsMin: string;
    yearsMax: string;
    primeBaseNeg: string;
    primeBaseMax: string;
    spreadMin: string;
    spreadMax: string;
  };
  results: {
    monthlyPayment: string;
    totalInterest: string;
    monthlyTotal: string;
    tracksAndLoan: (tracks: number, amount: string) => string;
    totalCost: string;
    totalInterestLabel: string;
    interestPercent: string;
  };
  mixBar: {
    title: string;
  };
  trackCard: {
    removeTrack: string;
  };
  addTrack: {
    button: string;
    selectTitle: string;
  };
  table: {
    title: string;
    month: string;
    year: string;
    payment: string;
    principal: string;
    interest: string;
    balance: string;
    openTable: string;
    showLess: string;
    showFull: (years: number) => string;
    monthly: string;
    annual: string;
    close: string;
  };
  mobileBar: {
    monthlyPayment: string;
    tracks: (n: number) => string;
  };
}

export const hebrewLabels: MortgageLabels = {
  locale: 'he',
  trackTypes: {
    fixed:       { label: 'ריבית קבועה לא צמודה', description: 'ריבית קבועה לכל התקופה' },
    variable:    { label: 'ריבית משתנה כל 5 שנים', description: 'ריבית מתעדכנת כל 5 שנים' },
    prime:       { label: 'פריים',                  description: 'צמוד לריבית הפריים' },
    eligibility: { label: 'זכאות',                  description: 'הלוואת זכאות מסובסדת' },
  },
  inputs: {
    amount: 'סכום (₪)',
    years: 'שנים',
    annualRate: 'ריבית שנתית (%)',
    primeRate: 'ריבית פריים (%)',
    primeSpread: 'מרווח מפריים (%)',
    effectiveRate: 'ריבית אפקטיבית',
    showPrimeDetails: 'הצג פרטי ריבית פריים',
    hidePrimeDetails: 'הסתר',
    primeDetailsTitle: 'פרטי ריבית הפריים',
    primeTooltip: 'ריבית הפריים נקבעת ע״י בנק ישראל ועומדת על ריבית בנק ישראל + 1.5%. ניתן לפירעון מוקדם ללא קנסות.',
  },
  hints: {
    fixed:       { amount: 'מינ׳ ₪100K',  years: '15–25 שנה מומלץ', rate: 'ריבית קבועה לכל התקופה' },
    variable:    { amount: 'מינ׳ ₪100K',  years: 'מתעדכן כל 5 שנים', rate: 'נמוכה בהתחלה, עשויה לעלות' },
    prime:       { amount: 'מינ׳ ₪100K',  years: 'גמיש לפירעון מוקדם', rate: 'פריים נוכחי ≈ 6%' },
    eligibility: { amount: 'עד ₪800K',    years: 'עד 28 שנה בד"כ', rate: 'ריבית מסובסדת מהמדינה' },
  },
  errors: {
    amountMin: 'הסכום חייב להיות לפחות ₪100,000',
    amountMax: 'הסכום לא יכול לעלות על ₪5,000,000',
    rateMin: 'הריבית חייבת להיות לפחות 0.1%',
    rateMax: 'הריבית לא יכולה לעלות על 15%',
    yearsMin: 'התקופה חייבת להיות שנה אחת לפחות',
    yearsMax: 'התקופה לא יכולה לעלות על 30 שנה',
    primeBaseNeg: 'ריבית הפריים לא יכולה להיות שלילית',
    primeBaseMax: 'ריבית פריים לא סבירה',
    spreadMin: 'המרווח לא יכול להיות פחות מ-3%-',
    spreadMax: 'המרווח לא יכול לעלות על 3%',
  },
  results: {
    monthlyPayment: 'החזר חודשי',
    totalInterest: 'סה"כ ריבית',
    monthlyTotal: 'החזר חודשי כולל',
    tracksAndLoan: (tracks, amount) => `${tracks} מסלולים · ${amount} סה"כ הלוואה`,
    totalCost: 'עלות כוללת',
    totalInterestLabel: 'סה"כ ריבית',
    interestPercent: '% ריבית מהקרן',
  },
  mixBar: { title: 'תמהיל המשכנתא' },
  trackCard: { removeTrack: 'הסר מסלול' },
  addTrack: { button: 'הוסיפו מסלול', selectTitle: 'בחרו סוג מסלול להוסיף' },
  table: {
    title: 'לוח סילוקין משולב',
    month: 'חודש',
    year: 'שנה',
    payment: 'תשלום',
    principal: 'קרן',
    interest: 'ריבית',
    balance: 'יתרה',
    openTable: 'פתח לוח סילוקין',
    showLess: 'הצג פחות',
    showFull: (years) => `הצג לוח מלא (${years} שנים)`,
    monthly: 'חודשי',
    annual: 'שנתי',
    close: 'סגור',
  },
  mobileBar: {
    monthlyPayment: 'החזר חודשי',
    tracks: (n) => `${n} מסלולים`,
  },
};

export const arabicLabels: MortgageLabels = {
  locale: 'ar',
  trackTypes: {
    fixed:       { label: 'فائدة ثابتة غير مربوطة', description: 'فائدة ثابتة طوال المدة' },
    variable:    { label: 'فائدة متغيرة كل 5 سنوات', description: 'تُحدَّث كل 5 سنوات' },
    prime:       { label: 'بريم',                      description: 'مربوطة بفائدة البريم' },
    eligibility: { label: 'استحقاق',                   description: 'قرض استحقاق مدعوم' },
  },
  inputs: {
    amount: 'المبلغ (₪)',
    years: 'سنوات',
    annualRate: 'الفائدة السنوية (%)',
    primeRate: 'فائدة البريم (%)',
    primeSpread: 'الفارق من البريم (%)',
    effectiveRate: 'الفائدة الفعلية',
    showPrimeDetails: 'عرض تفاصيل فائدة البريم',
    hidePrimeDetails: 'إخفاء',
    primeDetailsTitle: 'تفاصيل فائدة البريم',
    primeTooltip: 'يحدد بنك إسرائيل فائدة البريم وهي فائدة البنك المركزي + 1.5%. يمكن السداد المبكر بدون غرامات.',
  },
  hints: {
    fixed:       { amount: 'الحد الأدنى ₪100K',  years: '15–25 سنة موصى', rate: 'فائدة ثابتة طوال المدة' },
    variable:    { amount: 'الحد الأدنى ₪100K',  years: 'تُحدَّث كل 5 سنوات', rate: 'منخفضة بالبداية، قد ترتفع' },
    prime:       { amount: 'الحد الأدنى ₪100K',  years: 'مرن للسداد المبكر', rate: 'البريم الحالي ≈ 6%' },
    eligibility: { amount: 'حتى ₪800K',          years: 'حتى 28 سنة عادةً', rate: 'فائدة مدعومة من الدولة' },
  },
  errors: {
    amountMin: 'المبلغ يجب أن يكون ₪100,000 على الأقل',
    amountMax: 'المبلغ لا يمكن أن يتجاوز ₪5,000,000',
    rateMin: 'الفائدة يجب أن تكون 0.1% على الأقل',
    rateMax: 'الفائدة لا يمكن أن تتجاوز 15%',
    yearsMin: 'المدة يجب أن تكون سنة واحدة على الأقل',
    yearsMax: 'المدة لا يمكن أن تتجاوز 30 سنة',
    primeBaseNeg: 'فائدة البريم لا يمكن أن تكون سلبية',
    primeBaseMax: 'فائدة بريم غير معقولة',
    spreadMin: 'الفارق لا يمكن أن يكون أقل من -3%',
    spreadMax: 'الفارق لا يمكن أن يتجاوز 3%',
  },
  results: {
    monthlyPayment: 'القسط الشهري',
    totalInterest: 'إجمالي الفوائد',
    monthlyTotal: 'القسط الشهري الإجمالي',
    tracksAndLoan: (tracks, amount) => `${tracks} مسارات · ${amount} إجمالي القرض`,
    totalCost: 'التكلفة الإجمالية',
    totalInterestLabel: 'إجمالي الفوائد',
    interestPercent: '% فوائد من الأصل',
  },
  mixBar: { title: 'تركيبة القرض العقاري' },
  trackCard: { removeTrack: 'إزالة المسار' },
  addTrack: { button: 'أضيفوا مساراً', selectTitle: 'اختاروا نوع المسار' },
  table: {
    title: 'جدول السداد المشترك',
    month: 'شهر',
    year: 'سنة',
    payment: 'دفعة',
    principal: 'أصل',
    interest: 'فائدة',
    balance: 'رصيد',
    openTable: 'فتح جدول السداد',
    showLess: 'عرض أقل',
    showFull: (years) => `عرض الجدول الكامل (${years} سنوات)`,
    monthly: 'شهري',
    annual: 'سنوي',
    close: 'إغلاق',
  },
  mobileBar: {
    monthlyPayment: 'القسط الشهري',
    tracks: (n) => `${n} مسارات`,
  },
};
