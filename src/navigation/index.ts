import { NavItemsType } from 'src/@core/layouts/types'

const navigation = (): NavItemsType => {
  return [
    {
      title: 'Feed',
      path: '/feed'
    },
    {
      sectionTitle: 'Students'
    },
    {
      title: 'Ask a Doubt',
      path: '/ask-question'
    },
    {
      title: 'Doubt Status',
      path: '/doubt-status'
    },
    {
      title: 'Your Messages',
      path: '/chat',
      // openInNewTab: true
    },
    // {
    //   title: 'Payments',
    //   path: '/payments',
    //   // openInNewTab: true
    // },
  ]
}

export default navigation
