import { SITE_URL } from '@/lib/constants';
import JsonLd from './SEO';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { label: 'דף הבית', href: '/' },
    ...items,
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${SITE_URL}${item.href}` }),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="מיקום בדף" className="text-sm text-accent-400 mb-8">
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-accent-300 mx-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href && index < allItems.length - 1 ? (
                <a href={item.href} className="hover:text-primary-600 transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="text-accent-600 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
