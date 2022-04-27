// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import {
Grid,
Card,
Radio,
Select,
Button,
MenuItem,
TextField,
FormLabel,
InputLabel,
RadioGroup,
CardContent,
FormControl,
OutlinedInput,
FormControlLabel,
CardHeader,
} from '@mui/material'

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
          <Grid item xs={12} sx={{ marginTop: 4.8 }}>
            <TextField
              fullWidth
              multiline
              label='Description'
              minRows={4}
              placeholder='Bio'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='number' label='Price' placeholder='(123) 456-7890' />
          </Grid>
          <Grid item xs={12} sm={6}>

          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-multiple-select-label'>Languages</InputLabel>
              <Select
                multiple
                defaultValue={['English']}
                id='account-settings-multiple-select'
                labelId='account-settings-multiple-select-label'
                input={<OutlinedInput label='Languages' id='select-multiple-language' />}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='Portuguese'>Portuguese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Arabic'>Arabic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
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
