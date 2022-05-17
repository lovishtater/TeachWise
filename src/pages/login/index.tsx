
import { ChangeEvent, useEffect , ReactNode, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import themeConfig from '../../configs/themeConfig'
import Logo from 'src/views/base/Logo' 
import BlankLayout from '../../@core/layouts/BlankLayout'
import FooterIllustrationsV1 from '../../views/base/FooterIllustration'
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from 'src/app/store';
import {app} from '../../configs/firebase'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { signIn } from 'src/app/actions/auth'
import { Alert } from '@mui/material'

interface State {
  email: string
  password: string
  showPassword: boolean
}


const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {user, error} = useSelector((state: RootState) => state.auth);
  const [displayError, setError] = useState('');
  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false
  })

  const theme = useTheme()
  const router = useRouter()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

const handleSubmit = async () => {
  setError('');
  if (values.email && values.password) {
    await dispatch(signIn(values));
  } else {
    setError('Please fill all fields');
  }
};

useEffect(() => {
  if (user) {
    router.push("/feed");
  }
}, [user])

useEffect(() => {
  if (error) {
    setError(error);
  }
}, [error])


  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Logo />
             </Box>
          <Box sx={{ mb: 6 , display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Welcome to {themeConfig.appName}! 
            </Typography>
            <Typography variant='body2'>Please sign-in to your account and start the Learning </Typography>
          </Box>
            <TextField autoFocus fullWidth id='email' label='Email'
            onChange={handleChange('email')}
            sx={{ marginBottom: 4 }} />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                id='auth-login-password'
                 sx={{ marginBottom: 4 }}
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            { error && <Alert severity='error'>{displayError}</Alert> }
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel control={<Checkbox />} label='Remember Me' />
              <Link passHref href='/'>
                <LinkStyled onClick={e => e.preventDefault()}>Forgot Password?</LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/register'>
                  <LinkStyled>Create an account</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 5 }}>or</Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link href='/' passHref>
                <IconButton component='a'>
                  <img src='images/logos/google.png' alt='Google' height={24} />
                </IconButton>
              </Link>
            </Box>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
