import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import type { EmotionCache } from '@emotion/cache'
import themeConfig from '../configs/themeConfig'
import UserLayout from '../layouts/UserLayout'
import ThemeComponent from '../@core/theme/ThemeComponent'
import { SettingsConsumer, SettingsProvider } from '../@core/context/settingsContext'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '../../styles/globals.css'

type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}


// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const App = (props: ExtendedAppProps) => {
  const { Component, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <>
      <Head>
        <title>TeachWise</title>
        <meta name="description" content="One-Stop solution for Teaching - Learning Marketplace/Volunteer matchmaking where students can post their doubts or topic/concept they want to learn then our Algorithm will match them with experienced tutors across our platform for online teaching/consulting." />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  )
}

export default App
