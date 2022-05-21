// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ShareVariant from 'mdi-material-ui/ShareVariant'
import { Bookmark } from 'mdi-material-ui'
import { Chip } from '@mui/material'
import BidButton from './ProposalButton'

const PostCard = ({question}: any) => {
  const {id , createdBy, description,tags } = question;
  return (
    <Card 
    sx={{border: 0, boxShadow: 2, color: 'common.black', backgroundColor: 'white' , marginBottom: 4 , minWidth: '100%'}}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant='body1' sx={{ color: 'common.black' , fontWeight: 'bold'}}>
              {question.title}
            </Typography>
            <Typography variant='caption' sx={{ color: 'common.black', ml:1 }}>
               ~ {createdBy?.fullName}
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
            <BidButton question={question} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PostCard
