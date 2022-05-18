import { ReactNode } from 'react'
import { Settings } from 'src/@core/context/settingsContext'

export type ContentWidth = 'full' | 'boxed'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type NavLink = {
  path?: string
  title: string
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  icon?: string | string[] | ReactNode
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavSectionTitle = {
  sectionTitle: string
  action?: string
  subject?: string
}

export type NavItemsType = (NavLink | NavSectionTitle)[]

export type LayoutProps = {
  hidden: boolean
  settings: Settings
  children: ReactNode
  verticalNavItems?: NavItemsType
  scrollToTop?: (props?: any) => ReactNode
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
  AppBarContent?: (props?: any) => ReactNode
  NavMenuContent?: (props?: any) => ReactNode
  NavMenuBranding?: (props?: any) => ReactNode
  afterNavMenuContent?: (props?: any) => ReactNode
  beforeNavMenuContent?: (props?: any) => ReactNode
}

export type BlankLayoutProps = {
  children: ReactNode
}
