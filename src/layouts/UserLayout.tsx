import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import VerticalLayout from '../@core/layouts/VerticalLayout'
import VerticalNavItems from 'src/navigation'
import VerticalAppBarContent from 'src/views/base/AppBarContent'
import { useSettings } from 'src/@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // const Upcomming = () => {
  //   return (
  //     <Box sx={{ mx: 'auto' }}>
  //       popup for upcoming features
  //     </Box>
  //   )
  // }

  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={VerticalNavItems()} // Navigation Items
      // afterVerticalNavMenuContent={Upcomming}
      verticalAppBarContent={(
        props // AppBar Content
      ) => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  )
}

export default UserLayout
