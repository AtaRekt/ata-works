'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { locales } from '@/i18n/config'
import { setUserLocale } from '@/i18n/actions'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const flagMap = {
  en: '/en.png',
  pl: '/pl.png',
  tr: '/tr.png',
} as const

export default function LanguageSwitcher() {
  const t = useTranslations('common')
  const locale = useLocale()

  const handleChange = async (newLocale: string) => {
    await setUserLocale(newLocale)
  }

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        <div className="flex items-center gap-2">
          <SelectValue placeholder="Select language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5">
                <Image
                  src={flagMap[loc as keyof typeof flagMap]}
                  alt={loc}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <span>{loc.toUpperCase()}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 