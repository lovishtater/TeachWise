import { PaletteMode } from '@mui/material'
import { ContentWidth } from 'src/@core/layouts/types'

type ThemeConfig = {
  mode: PaletteMode
  appName: string
  routingLoader: boolean
  disableRipple: boolean
  navigationSize: number
  menuTextTruncate: boolean
  contentWidth: ContentWidth
  responsiveFontSizes: boolean
}

const themeConfig: ThemeConfig = {

  appName: 'TeachWise',
  mode: 'light',
  contentWidth: 'boxed' /* full | boxed */,
  routingLoader: true /* true | false */,
  menuTextTruncate: true /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */
}

export default themeConfig
