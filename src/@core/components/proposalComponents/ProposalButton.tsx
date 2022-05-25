import { Button,
   Grid,
   OutlinedInput,
   Typography,
   Chip,
   TextField,
   ListItem,
   ListItemText,
   List,
   ListSubheader,      
  } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {submitProposal} from "src/app/actions/questionPost";

const ProposalButton = ({ question }: any) => {
  const [proposal, setProposal] = useState<any>({
    postID: question._id,
    feeProposed: 0,
    coverLetter: "",
    milestone: [],
  });
  const [open, setOpen] = useState(false);
  const [milestone, setMilestone] = useState({
    title: "",
    description: "",
  });

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleChange = (name: string) => (event: any) => {
    setProposal({ ...proposal, [name]: event.target.value });
  };

  const handleSubmit: any = () => {
      submitProposal(proposal).then((res: any) => {
        if (res == true) {
          alert("Proposal submitted successfully");
        }
    }).catch((err: any) => {
      alert("Error submitting proposal");
    });
  }

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
        }}
      >
        Submit a Proposal
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} scroll="body">
        <DialogTitle>Submit a Proposal</DialogTitle>
        <DialogContent>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            <Grid container>
              <Grid item xs={12}>
                <CloseIcon
                  color="primary"
                  onClick={() => setOpen(false)}
                  sx={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ marginTop: "0.5rem", fontSize: "1rem" }}>
                  {question.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                  {question.description}
                </Typography>
                {question.tags &&
                  question.tags.length > 0 &&
                  question.tags.map((tag: any, index: Number) => (
                    <Chip
                      //@ts-ignore
                      key={index}
                      label={tag}
                      color="primary"
                      size="small"
                      sx={{
                        margin: "0.25rem",
                      }}
                    />
                  ))}
              </Grid>
              <Grid item xs={12} sx={{ minWidth: "100%", marginTop: "1.5rem" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Cover Letter :-
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  placeholder="Please provide a cover letter explaining your proposal:"
                  onChange={handleChange("coverLetter")}
                />
              </Grid>
              <Grid item xs={6} md={6} lg={6} sx={{ minWidth: "100%", marginTop: "1.5rem" }}>
                <Typography variant="body1" >
                  MileStone title
                </Typography>
                <OutlinedInput
                  fullWidth
                  value={milestone.title}
                  placeholder="Please provide a title for your milestone:"
                  onChange={(event:any) => setMilestone({ ...milestone, title: event.target.value })}
                />
              </Grid>
              <Grid item xs={6} md={6} lg={6} sx={{ minWidth: "100%", marginTop: "1.5rem" }}>
                <Typography variant="body1" >
                  MileStones description :-
                </Typography>
                <OutlinedInput
                  fullWidth
                  value={milestone.description}
                  placeholder="Please describe the milestone:"
                  onChange={(event:any) => setMilestone({ ...milestone, description: event.target.value })}
                />
              </Grid>
              <Grid item xs={12} sx={{ minWidth: "100%", marginTop: "1.5rem" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setProposal({ ...proposal, milestone: [...proposal?.milestone, milestone]});
                    setMilestone({ title: "", description: "" })
                   }}
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                  }}
                >
                  Add Milestone
                </Button>
              </Grid>
              {proposal.milestone.length > 0 && (
              <Grid item xs={12} sx={{ minWidth: "100%", marginTop: "1.5rem" }}>
              <List 
              sx={{ width: '100%' }}
              subheader={<ListSubheader>  Milestones :-</ListSubheader>} 
              >
              {proposal.milestone.map((milestone: any, index: number) => (
                <ListItem>
                  <ListItemText 
                  primary={index + 1 + ") " + milestone.title} 
                  secondary={milestone.description}
                  />
                </ListItem>
              ))}
              </List>
              </Grid>
              )}
              <Grid container sx={{ marginTop: "1.5rem" }}>
                <Grid item xs={6} md={6} lg={6} sx={{ marginTop: "0.5rem" }}>
                  <Typography variant="body1" >
                    Fees
                  </Typography>
                  <TextField
                    type="number"
                    sx={{ marginRight: "0.5rem" }}
                    placeholder="Fee proposed"
                    variant="outlined"
                    onChange={handleChange("feeProposed")}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleSubmit();
                    }}
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      display: "absolute",
                      bottom: "0px",
                      margin: "0.5rem 0.5rem",
                      padding: "0.5rem 0/5rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProposalButton;
