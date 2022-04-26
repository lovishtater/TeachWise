import { Button, Checkbox, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import PostCard from "src/views/cards/PostCard";

  const grid = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin: "0"
    };

const Feed: NextPage = () => {

  return (
    <div>
      <main>
            <h1 style={{ textAlign: 'center' }}>
              Welcome to <a>TeachWise</a>
            </h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom >
              Filters
            </Typography>
            <Typography variant="body1" gutterBottom>
            <Checkbox defaultChecked />
              React Native
            </Typography>
            </Grid>
          <Grid item xs={12} sm={6} md={6} sx={grid}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          size='small'
          placeholder='Search'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4, my:2 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            ),
          }}
        />
        <Button variant='contained' color='primary' sx={{ ml: 2 }}>
          Search
        </Button>
        <Button variant='contained' color='error' sx={{ ml: 2 }}>
          reset
        </Button>
        </div>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Grid>
          <Grid item sm={6} md={3}>
            </Grid>
        </Grid>
      </main>
    </div>
  )
}

export default Feed
