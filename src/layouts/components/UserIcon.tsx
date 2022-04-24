
import { ElementType } from 'react'


import { SvgIconProps } from '@mui/material'

interface UserIconProps {
  iconProps?: SvgIconProps
  icon: string | ElementType
}

const UserIcon = (props: UserIconProps) => {
  // ** Props
  const { icon, iconProps } = props

  const IconTag = icon

  return (
    <IconTag {...iconProps} />
  )
}

export default UserIcon
