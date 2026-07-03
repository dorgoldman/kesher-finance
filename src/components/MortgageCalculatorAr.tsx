'use client';

import MortgageCalculator from './MortgageCalculator';
import { arabicLabels } from '@/lib/i18n/mortgage-labels';

export default function MortgageCalculatorAr() {
  return <MortgageCalculator labels={arabicLabels} />;
}
