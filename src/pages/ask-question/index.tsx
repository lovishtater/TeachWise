// ** React Imports
import { forwardRef, useState } from 'react'
import { connect } from "react-redux"
// import {setPost} from '../../redux/actions/main'

// ** MUI Imports
import {
Grid,
Card,
Select,
Button,
MenuItem,
TextField,
InputLabel,
CardContent,
FormControl,
FormLabel,
FormControlLabel,
RadioGroup,
CardHeader,
Autocomplete,
Radio,
} from '@mui/material'
import { Language, Expertise } from 'src/@core/configs/constants'
import { askQuestion } from 'src/app/actions/questionPost'
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from 'src/app/store';
const CreatePost = (props:any) => {
  const dispatch = useDispatch<AppDispatch>();

  // ** State
  const [values, setValues] = useState({
    title: '',
    description: '',
    tags: [],
    language: [],
    fee: '',
    consultationType: '',
  })


  const onSubmit = (e:any) => {
    askQuestion(values).then((res:any) => {
      alert('Question posted successfully')
    }).catch((err:any) => {
      alert('Error posting question')
    })
  }

  const handleChange = (name:any) => (event:any) => {
		setValues({ ...values, [name]: event.target.value });
	};

  const handleAutocompleteChange = (name:any) => (value:any) => {
    setValues({ ...values, [name]: value });
  }
  return (
      <Card>
    <CardHeader title="Create Post"
    subheader="Please fill out the form below to create a post"
    />
    <CardContent>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              onChange={handleChange('title')}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              multiline
              label='Description'
              minRows={4}
              placeholder='Bio'
              onChange={handleChange('description')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              multiple
              id="tags-filled"
              options={Expertise}
              onChange={(event, newValue) => handleAutocompleteChange('tags')(newValue)}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Expertise"
                  placeholder="Expertise"
                />
              )}
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              multiple
              options={Language}
              onChange={(event, newValue) => { handleAutocompleteChange('language')(newValue) }}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} label="Language" variant="outlined"  />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
            <TextField fullWidth type='number' label='Fee' placeholder='Fee' onChange={handleChange('fee')} />
              </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Mode</FormLabel>
              <RadioGroup row defaultValue='male' aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='online' label='Online' control={<Radio />} onClick={handleChange('consultationType')}/>
                <FormControlLabel value='offline' label='Offline' control={<Radio />} onClick={handleChange('consultationType')} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={(e) => onSubmit(e)} >
              Post
            </Button>
          </Grid>
        </Grid>
    </CardContent>
    </Card>
  )
}

 export default CreatePost

 
