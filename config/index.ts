import type { AppInfo } from '@/types/app'

export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`

const customTitle = 'Ai Alaya'

export const APP_INFO: AppInfo = {
  title: customTitle,
  description: 'Hello! I am AI-Alaya, your guide on LinkinLegal. Let me help you navigate our comprehensive collection of laws, regulations, and contracts, and show you how to use tools like Compliance Check, Guideline Check, Templates Check and your personalized Law Library right from the dashboard. Let’s simplify your legal tasks together!',
  copyright: '© All content of the linkinlegal excluding publicly sourced documents are copyright © Linkinlegal 2024. All rights reserved.',
  privacy_policy: 'Link to privacy policy',
  default_language: 'en',
}

export const isShowPrompt = true // Set to true or false based on your needs
export const promptTemplate = 'Your prompt template here'

export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48
