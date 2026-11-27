import { useEffect, useRef, type RefObject } from 'react'
import { useTranslation } from 'react-i18next'

export function useAnimateOnLanguageChange(
  elementRef: RefObject<HTMLElement | null>,
) {
  const { i18n } = useTranslation()
  const previousLanguage = useRef(i18n.language)

  useEffect(() => {
    if (previousLanguage.current === i18n.language) return
    previousLanguage.current = i18n.language

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    elementRef.current?.animate?.(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 500, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
    )
  }, [i18n.language, elementRef])
}
