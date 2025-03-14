"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

type Language = "en" | "es" | "fr" | "de"

interface DesignCustomization {
  primaryColor: string
  secondaryColor: string
  fontFamily: string
}

interface SettingsContextType {
  language: Language
  setLanguage: (lang: Language) => void
  designCustomization: DesignCustomization
  setDesignCustomization: (design: DesignCustomization) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children, ...props }: ThemeProviderProps) {
  const [language, setLanguage] = useState<Language>("en")
  const [designCustomization, setDesignCustomization] = useState<DesignCustomization>({
    primaryColor: "hsl(221.2 83.2% 53.3%)",
    secondaryColor: "hsl(210 40% 96.1%)",
    fontFamily: "Inter, sans-serif",
  })

  useEffect(() => {
    // Load settings from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    const savedDesign = localStorage.getItem("designCustomization")

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedDesign) setDesignCustomization(JSON.parse(savedDesign))
  }, [])

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem("language", language)
    localStorage.setItem("designCustomization", JSON.stringify(designCustomization))

    // Apply design customization
    document.documentElement.style.setProperty("--primary", designCustomization.primaryColor)
    document.documentElement.style.setProperty("--secondary", designCustomization.secondaryColor)
    document.body.style.fontFamily = designCustomization.fontFamily

    // Force dark mode
    document.documentElement.classList.add("dark")
  }, [language, designCustomization])

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        designCustomization,
        setDesignCustomization,
      }}
    >
      <NextThemesProvider {...props} attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
        {children}
      </NextThemesProvider>
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}

