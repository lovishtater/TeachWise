
import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import themeConfig from 'src/@core/configs/themeConfig'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import FooterIllustrationsV1 from 'src/@core/components/base/FooterIllustration'
import { Grid } from '@mui/material'
import { ArrowRight } from 'mdi-material-ui'
import Image from 'next/image'

const Home = () => {  
  const router = useRouter()
  return (
    <Box className='content-center'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ mb: 6 , display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant='h2' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Welcome to {themeConfig.appName}! 
            </Typography>
            <Typography variant='h6'>One-Stop solution for Teaching - Learning Marketplace/Volunteer matchmaking where students can post their doubts or topic/concept they want to learn then our Algorithm will match them with experienced tutors across our platform for online teaching/consulting. </Typography>
          </Box>
          <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant='contained' color='primary' size='large' onClick={() => router.push('/register')}>
              Get Started
              <ArrowRight 
              style={{ marginLeft: 8 }}
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image
          width={'400px'}
          height={'400px'}
          src='/images/pages/landing.png' alt='Illustration' />
        </Grid>
        </Grid>
      <FooterIllustrationsV1 />
    </Box>
  )
}

Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Home
