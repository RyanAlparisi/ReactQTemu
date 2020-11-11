import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 1500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar style={{ backgroundColor: '#828282' }}position="fixed">
        <Toolbar> 
          <Grid justify="flex-start" container>
            <Button color="inherit">QTemu</Button>
            <Button color="inherit">Create Meetup</Button>
            <Button color="inherit">Explore</Button>
          </Grid>
            <Button color="inherit">Login</Button> </Toolbar>
      </AppBar><br />
      <br />
      <br />
      <br />
      <Paper className={classes.paper} style={{ backgroundColor: '#C4C4C4' }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://beepeers.com/assets/images/commerces/default-image.jpg" height="200" width="200"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1"><h2>
                Hacktiv8 Meetup
                </h2>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Location Jakarta, Indonesia  
                </Typography><br />
                <Typography variant="body2" gutterBottom>
                  Members  1,078
                </Typography><br />
                <Typography variant="body2" gutterBottom>
                  Organizers Adhy Wiranata
                </Typography>
              </Grid>
              <Grid item>
              <Button style={{ backgroundColor: '#4F4F4F' }}variant="contained" color="primary">Join Us</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper><br />

      <Typography gutterBottom variant="subtitle1">
        <h2>Next Meetup</h2>
      </Typography>

      <Paper className={classes.paper} style={{ backgroundColor: '#C4C4C4' }}>
        <Grid container spacing={2}>
          <Grid item xs={11} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1"><h4>
                Awesome meetup and event
                </h4>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                25 January 2019 
                </Typography><br />
                <Typography variant="body2" gutterBottom>
                Hello, JavaScript & Node.js Ninjas!<p />
                Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!<p />
                The meetup format will contain some short stories and technical talks.<p />
                If you have a short announcement you'd like to share with the audience, yoou may do so during open mic announcements.
                </Typography><br />
                <Typography variant="body2" gutterBottom>
                Remember to bring a photo ID to get through building security.
                </Typography>
                <Typography variant="body2" gutterBottom>
                -----
                </Typography>
                <Typography variant="body2" gutterBottom>
                Best, Hengki, Govanni, Sofian, Riza, Agung The JakartaJS Organizers
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper><br />

      <Typography gutterBottom variant="subtitle1">
        <h2>About Meetup</h2>
      </Typography>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1"><h5>
                Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.<br />
                Twitter : @JakartaJS and we use the hashtag #jakartajs
                </h5>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper><br />

      <Typography gutterBottom variant="subtitle1">
        <h2>Members</h2>
      </Typography>

      <Paper className={classes.paper} style={{ backgroundColor: '#C4C4C4' }}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Organizers<p />
            Adhy Winata 4 Others.</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Typography gutterBottom variant="subtitle1">
        <h2>Past Meetups</h2>
      </Typography>

      <Grid justify="center" container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper style={{ backgroundColor: '#C4C4C4' }} className={classes.paper}>27 November 2017<hr />
          <Typography gutterBottom variant="subtitle1">
          <h4>#39 JakartaJS April Meetup with kumparan</h4><p />
          139 <Typography variant="body2" color="textSecondary">
                went 
                </Typography>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
      </Typography>
      <Grid item>
              <Button style={{ backgroundColor: '#828282' }}variant="contained" color="primary">View</Button>
              </Grid>
          </Paper> 
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper style={{ backgroundColor: '#C4C4C4' }} className={classes.paper}>27 Oktober 2017<hr />
          <Typography gutterBottom variant="subtitle1">
          <h4>#38 Jakarta JS April Meetup with BliBli</h4> <p />
          113 <Typography variant="body2" color="textSecondary">
                went 
                </Typography>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
      </Typography>
      <Grid item>
              <Button style={{ backgroundColor: '#828282' }}variant="contained" color="primary">View</Button>
              </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper style={{ backgroundColor: '#C4C4C4' }} className={classes.paper}>27 September 2017<hr />
          <Typography gutterBottom variant="subtitle1">
          <h4>#37 JakartaJS April Meetup with Hacktiv8</h4><p />
          110 <Typography variant="body2" color="textSecondary">
                went 
                </Typography>
          </Typography>
          <Typography gutterBottom variant="subtitle1">
      </Typography>
      <Grid item>
              <Button style={{ backgroundColor: '#828282' }}variant="contained" color="primary">View</Button>
              </Grid>
          </Paper>
        </Grid>
      </Grid>
      
      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
          <Box fontWeight="fontWeightBold" m={1}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid><br></br>
      <Grid justify="center" container spacing={3}>
        <Typography fontWeight="fontWeightBold">
          <Box m={2}>
            Copyright Hacktiv8 2018
          </Box>
        </Typography> 
      </Grid>
      <div className={classes.offset} />
    </React.Fragment>
  )
};

export default App;
