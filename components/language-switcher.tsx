'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { locales } from '@/i18n/config'
import { setUserLocale } from '@/i18n/actions'
export default function LanguageSwitcher() {
  const t = useTranslations('common')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    await setUserLocale(newLocale)
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-select">{t('language')}:</label>
      <select
        id="language-select"
        value={locale}
        onChange={handleChange}
        className="border rounded p-1"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
} 