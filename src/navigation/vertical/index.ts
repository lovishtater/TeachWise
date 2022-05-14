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
