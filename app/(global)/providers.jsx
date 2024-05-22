'use client'
import * as React from 'react'
import {ThemeProvider as NextThemeProviders} from 'next-themes'

export function ThemeProvider({children, ...props}) {
  return <NextThemeProviders {...props}>{children}</NextThemeProviders>
}
