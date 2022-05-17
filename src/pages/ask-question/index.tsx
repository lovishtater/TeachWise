// ** React Imports
import { forwardRef, useState } from 'react'
import { connect } from "react-redux"
import {setPost} from '../../redux/actions/main'

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
import { Language, Expertise } from 'src/configs/constants'

const CreatePost = (props:any) => {

  const { initialState, setPost } = props

  // ** State
  const [values, setValues] = useState({
    title: '',
    description: '',
    expertise: '',
    language: [],
    minimumFee: '',
    maximumFee: '',
    mode: '',
    status: '',
  })


  const onSubmit = (e:any) => {
    e.preventDefault()
    console.log(values)
    setPost(values);
  }

  const handleChange = (name:any) => (event:any) => {
		setValues({ ...values, [name]: event.target.value });
	};

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
              onChange={handleChange('Description')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              multiple
              id="tags-filled"
              options={Expertise}
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
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} label="Language" variant="outlined" onChange={handleChange('Language')} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
            <TextField fullWidth type='number' label='Minimum Fee' placeholder='Minimum Fee' onChange={handleChange('minimumFee')} />
              </Grid>
              <Grid item xs={6}>
            <TextField fullWidth type='number' label='Maximum Fee' placeholder='Maximum Fee' onChange={handleChange('maximumFee')} />
              </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Mode</FormLabel>
              <RadioGroup row defaultValue='male' aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='Online' label='Online' control={<Radio />} onClick={handleChange('mode')}/>
                <FormControlLabel value='Offline' label='Offline' control={<Radio />} onClick={handleChange('mode')} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={(e) => onSubmit(e)} >
              Post
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
    </CardContent>
    </Card>
  )
}

const mapStateToProps = (state:any) => {
  return { props: state.post }
 }
 
 const mapDispatchToProps = {
   setPost
 }

 export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)

