'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LocaleToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    
    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; path=/`;
    
    // Navigate to the new locale
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="text-brand-text hover:text-brand-accent transition-colors px-3 py-2 rounded-md"
      aria-label="Toggle language"
    >
      English｜中文
    </button>
  );
}
