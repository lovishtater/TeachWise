import React, { Key } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {Paper,Tooltip, Divider} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import moment from 'moment';
import { Delete } from '@mui/icons-material';
export default function UserPostCard({
    question
}:{
    question: any
}) {
    const { title, description, createdAt, teacherProposal, teacherAccepted } = question;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    <Card style={{marginBottom: '10px'}}>
      <CardHeader
        action={
          <IconButton color='error'>
              <Tooltip title="Delete">
            <Delete />
            </Tooltip>
          </IconButton>
        }
        title={title}
        subheader={moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
      />
      <CardContent style={{padding: '0px'}}>
        <Typography variant="body2" color="text.secondary" sx={{px: '10px'}}>
          {description}
        </Typography>
        </CardContent>
      <CardActions disableSpacing>
        <IconButton color='info'>
          <ShareIcon />
        </IconButton>
        <Button
        sx={{ marginLeft: 'auto' }}
          color="primary"
          variant='contained'
          onClick={handleExpandClick}
          disabled={teacherProposal.length === 0}
          aria-expanded={expanded}
        >
          {teacherProposal.length > 0  ? `View ${teacherProposal.length} Proposals` : 'No Proposals'}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='h6'>
              All Proposals
          </Typography>
          {teacherProposal && teacherProposal.length > 0 && teacherProposal.map((proposal:any, index: Key) => (
              <>
                    <CardHeader 
                        avatar={    
                            <Avatar aria-label="recipe">
                                {proposal.fullName[0]}
                            </Avatar>
                        }
                        title={proposal.fullName}
                        subheader={moment(proposal.proposalCreatedAt).format('MMMM Do YYYY, h:mm:ss a')}
                        action={
                            teacherAccepted.length === 0 ?(
                                <Button
                                    color="primary"
                                    variant='contained'
                                    onClick={() => {}}
                                >
                                    Accept Proposal
                                </Button>
                            ):(
                                <Button
                                    color={teacherAccepted._id === proposal._id ? 'success' : 'error'}
                                    variant='contained'
                                    onClick={() => {}}
                                >
                                    {teacherAccepted._id === proposal._id ? 'Accepted' : 'Rejected'}
                                </Button>
                            )
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {proposal.coverLetter}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {proposal.feeProposed}
                        </Typography>
                        </CardContent>
                        { index !== teacherProposal.length - 1 && <Divider />}
                </>
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
