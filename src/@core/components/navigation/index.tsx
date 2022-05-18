import { ReactNode, useRef, useState } from 'react'
import List from '@mui/material/List'
import Box, { BoxProps } from '@mui/material/Box'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Settings } from 'src/@core/context/settingsContext'
import { NavItemsType } from 'src/@core/layouts/types'
import Drawer from './Drawer'
import NavItems from './NavItems'
import NavHeader from './NavHeader'

interface Props {
  hidden: boolean
  navWidth: number
  settings: Settings
  children: ReactNode
  navVisible: boolean
  toggleNavVisibility: () => void
  setNavVisible: (value: boolean) => void
  verticalNavItems?: NavItemsType
  saveSettings: (values: Settings) => void
  NavMenuContent?: (props?: any) => ReactNode
  afterNavMenuContent?: (props?: any) => ReactNode
  beforeNavMenuContent?: (props?: any) => ReactNode
}



const Navigation = (props: Props) => {
  const {
    hidden,
    afterNavMenuContent,
    beforeNavMenuContent,
    NavMenuContent: userNavMenuContent
  } = props

  const [groupActive, setGroupActive] = useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([])

  const shadowRef = useRef(null)


  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  const scrollMenu = (container: any) => {
    container = hidden ? container.target : container
    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('d-block')) {
        // @ts-ignore
        shadowRef.current.classList.add('d-block')
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('d-block')
    }
  }

  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <Drawer {...props}>
      <NavHeader {...props} />
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* @ts-ignore */}
        <ScrollWrapper
          containerRef={(ref: any) => handleInfiniteScroll(ref)}
          {...(hidden
            ? {
                onScroll: (container: any) => scrollMenu(container),
                sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' }
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: (container: any) => scrollMenu(container)
              })}
        >
          {beforeNavMenuContent ? beforeNavMenuContent(props) : null}
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {userNavMenuContent ? (
              userNavMenuContent(props)
            ) : (
              <List className='nav-items' sx={{ transition: 'padding .25s ease', pr: 4.5 }}>
                <NavItems
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
          </Box>
        </ScrollWrapper>
      </Box>
      {afterNavMenuContent ? afterNavMenuContent(props) : null}
    </Drawer>
  )
}

export default Navigation
