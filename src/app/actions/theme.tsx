import {SET_THEME} from "../constants/theme";


export const setTheme = (message:any) => async(dispatch:any) => {   
      dispatch({
        type: SET_THEME,
        payload: message,
      })
}


/*******************Context code to be referred********************/

// import { PaletteMode } from '@mui/material'
// import themeConfig from 'src/@core/configs/themeConfig'
// import { ThemeColor, ContentWidth } from 'src/@core/layouts/types'

// export type Settings = {
//   mode: PaletteMode
//   themeColor: ThemeColor
//   contentWidth: ContentWidth
// }

// export type SettingsContextValue = {
//   settings: Settings
//   saveSettings: (updatedSettings: Settings) => void
// }

// const initialSettings: Settings = {
//   themeColor: 'primary',
//   mode: themeConfig.mode,
//   contentWidth: themeConfig.contentWidth
// }

// // Create Context
// export const SettingsContext = createContext<SettingsContextValue>({
//   saveSettings: () => null,
//   settings: initialSettings
// })

// export const SettingsProvider = ({ children }: { children: ReactNode }) => {
//   // State
//   const [settings, setSettings] = useState<Settings>({ ...initialSettings })

//   const saveSettings = (updatedSettings: Settings) => {
//     setSettings(updatedSettings)
//   }

//   return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
// }

// export const SettingsConsumer = SettingsContext.Consumer
