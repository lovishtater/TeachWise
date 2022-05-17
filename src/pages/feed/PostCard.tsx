// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ShareVariant from 'mdi-material-ui/ShareVariant'
import { Bookmark } from 'mdi-material-ui'
import { Chip, Button, Grid } from '@mui/material'

const PostCard = ({name, description,tags }: any) => {
  return (
    <Card 
    sx={{border: 0, boxShadow: 2, color: 'common.black', backgroundColor: '#fff' , marginBottom: 4 , minWidth: '100%'}}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Eugene Clarke' src='/images/avatars/1.png' sx={{ width: 35, height: 35, marginRight: 2.75 }} />
            <Typography variant='body1' sx={{ color: 'common.black' , fontWeight: 'bold'}}>
              {name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
                <Bookmark sx={{ color: 'common.primary', fontSize: '1.5rem', mr: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
            </Box>
          </Box>
        </Box>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.black', whiteSpace : 'pre-wrap' }}>
            {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2}}>
        {tags.map((tag: any) => (
          <Chip
          label={tag}
          color="primary"
          sx={{
            height: 24,
            fontSize: '0.75rem',
            margin: '0.25rem',
            textTransform: 'capitalize',
            '& .MuiChip-label': { fontWeight: 500 }
          }}
            />
        ))}
          </Box>
           <Box>
            <Button variant='outlined' color='primary' sx={{ fontSize: '0.75rem', fontWeight: 500, padding: '0.25rem 0.5rem', borderRadius: '0.25rem' , marginTop : '0.25rem '}}>
              Lets Solve
            </Button>
          </Box>
        </Box>

      </CardContent>
    </Card>
  )
}

export default PostCard
