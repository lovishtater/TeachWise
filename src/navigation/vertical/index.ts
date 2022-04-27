import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Feed',
      path: '/feed'
    },
    {
      sectionTitle: 'Students'
    },
    {
      title: 'Ask a question',
      path: '/ask-question'
    },
    // {
    //   title: 'Messages',
    //   path: '/messages',
    //   // openInNewTab: true
    // },
    // {
    //   title: 'Payments',
    //   path: '/payments',
    //   // openInNewTab: true
    // },
  ]
}

export default navigation
