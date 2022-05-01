// ** React Imports
import { forwardRef, useState } from 'react'

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

const CreatePost = () => {
  // ** State
  const [date, setDate] = useState<Date | null | undefined>(null)

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
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              multiline
              label='Description'
              minRows={4}
              placeholder='Bio'
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
                <TextField {...params} label="Language" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
            <TextField fullWidth type='number' label='Minimum Fee' placeholder='Minimum Fee' />
              </Grid>
              <Grid item xs={6}>
            <TextField fullWidth type='number' label='Maximum Fee' placeholder='Maximum Fee' />
              </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Mode</FormLabel>
              <RadioGroup row defaultValue='male' aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='Online' label='Online' control={<Radio />} />
                <FormControlLabel value='Offline' label='Offline' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Post
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
          </Grid>
        </Grid>
    </CardContent>
    </Card>
  )
}

export default CreatePost

