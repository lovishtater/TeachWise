import { Grid, Typography, TextField, InputAdornment } from '@mui/material';
import type { NextPage } from 'next'
import Magnify from 'mdi-material-ui/Magnify'
import PostCard from "src/@core/components/proposalComponents/PostCard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from 'src/app/store';
import { useEffect } from 'react';
import { getQuestion } from 'src/app/actions/questionPost';

  const grid = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin: "0"
    };

const Feed: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {question} = useSelector((state: RootState) => state.questions);

    useEffect(() => {
        dispatch(getQuestion());
    }, []);

  return (
    <div>
      <main>
            <h3>
              Solve Doubts and Get Help
            </h3>
            <div>
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
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9} md={9} sx={grid}>
            {question && question.length > 0 && question.map((question:any, index: Number) => (
            <PostCard
              key={index}
              question={question}
            />
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ display: {xs : 'none', md: 'block'} }}>
            <Typography variant="h6" gutterBottom >
              Filters
            </Typography>
            <Typography variant="body1" gutterBottom>
              TODO: Add filters
            </Typography>
            </Grid>
        </Grid>
      </main>
    </div>
  )
}

export default Feed
