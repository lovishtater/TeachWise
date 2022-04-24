import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Feed',
      path: '/'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      path: '/login',
      // openInNewTab: true
    },
    {
      title: 'Register',
      path: '/register',
      // openInNewTab: true
    },
  ]
}

export default navigation
