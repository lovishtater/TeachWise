import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from './Layout'
import NavItems from 'src/navigation'
import AppBarContent from 'src/@core/components/base/AppBarContent'
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
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={NavItems()} // Navigation Items
      // afterNavMenuContent={Upcomming}
      AppBarContent={(
        props // AppBar Content
      ) => (
        <AppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
