export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ComponentSize = 'sm' | 'md' | 'lg'

export interface NavItem {
  label: string
  href: string
  external?: boolean
}
