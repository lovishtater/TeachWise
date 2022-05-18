import React, {useRef,useState,useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import SendIcon from 'mdi-material-ui/Send';
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import {io} from 'socket.io-client';
import type { RootState, AppDispatch } from 'src/app/store';
import {  useSelector } from "react-redux";
import { AnySet } from 'immer/dist/internal';
import { sendMessages } from 'src/app/actions/messages';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    minHeight: '60vh',
    overflowY: 'auto'
  },
  selfMessage: {
    textAlign: 'right',
  },
    otherMessage: {
    textAlign: 'left',
    },
});

const Chat = () => {

  const {user} = useSelector((state: RootState) => state.auth);
  const [conversations, setConversations] = useState<any>([]);
  const [currentChat, setCurrentChat] = useState<any>({user: {
    _id: '6283cfe27d42185f4ee20732',
  }  });
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>("");
  const [arrivalMessage, setArrivalMessage] = useState<any>("");
  const [onlineUsers, setOnlineUsers] = useState([]);

  const classes = useStyles();
  const socket:any = useRef();

  console.log("user is",user)

  // const {_id} = user

  useEffect(() => {

    console.log("working..")

    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data:any) => {

      console.log("getMessage Data",data)

      setArrivalMessage({
        sender: data?.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users:any) => {
      console.log(users);
    });
  }, [user]);

  useEffect(() => {
    arrivalMessage && currentChat &&
      currentChat?.members?.includes(arrivalMessage.sender) &&
      setMessages((prev:any) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  const handleSubmit = async (e:any) => {

    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat.user._id,
    };

    console.log("currentChat",currentChat);

    const receiverId = "628370482299fafc11783136";

    // const receiverId = currentChat.members.find(
    //   (member:any) => member !== user._id
    // );

    const messageObj = {
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage,
    };

    socket.current.emit("sendMessage", messageObj);
    console.log("end");

    //perform the API Call for DB
    const response = await sendMessages(messageObj);
    // const data = await response.json();
    // console.log("data",data);
    // setMessages((prev:any) => [...prev, data]);
    // setNewMessage("");

    console.log("response",response);

  };

  return (
      <div>
        
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <Grid item xs={12} style={{padding: '10px'}}>
                          <TextField
                            size= 'small'
                            fullWidth
                            placeholder='Search'
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4, my:0 } }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <Magnify fontSize='small' />
                                </InputAdornment>
                              ),
                            }}
                          />
                </Grid>
                <List>
                    <ListItem button key="Lovish Tater">
                        <ListItemIcon>
                            <Avatar alt="Lovish Tater" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Lovish Tater">Lovish Tater</ListItemText>
                    </ListItem>
                <Divider />
                    <ListItem button key="Manish">
                        <ListItemIcon>
                            <Avatar alt="Manish" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Manish">Manish</ListItemText>
                    </ListItem>
                <Divider />
                    <ListItem button key="Garima Jain">
                        <ListItemIcon>
                            <Avatar alt="Garima Jain" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Garima Jain">Garima Jain</ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9}>
                <Grid item xs={12} >
                    <ListItem button key="Lovish Tater">
                        <ListItemIcon>
                            <Avatar alt="Lovish Tater" src="https://material-ui.com/static/images/avatar/5.jpg" />
                        </ListItemIcon>
                       <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Lovish Tater</Typography>
                    </ListItem>
                </Grid>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText  primary="Hey man, What's up ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText  secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12} sx={{textAlign: 'right'}}>
                                <ListItemText  primary="Hey, Iam Good! What about you ?">                                    
                                </ListItemText>
                                <ListItemText  secondary="09:31"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText  primary="Cool. i am good, let's catch up!"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText  secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    {arrivalMessage && (
                        <ListItem key={arrivalMessage.createdAt}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText  primary={arrivalMessage.text}></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText  secondary={new Date(arrivalMessage.createdAt).toLocaleTimeString()}></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                    )}
                    
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>

                    <TextField
                            size='small'
                            placeholder='Type your message'
                            fullWidth
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4, my:0 } }}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                          />

                    </Grid>
                    <Grid xs={1} >
                        <Fab color="primary" aria-label="add" 
                        onClick={(e) => {handleSubmit(e)}}>
                        
                            <SendIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;