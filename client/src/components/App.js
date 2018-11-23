import React from 'react'
import '../styles/App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import { Button } from '@material-ui/core'
 
const App = () => (
  <div>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Interesting Rooms
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={11}>
        <Paper className="app-intro" elevation={1}>
          <Typography variant="h5" component="h4" align="center">
            Chat with everyone arround the world about your interests.
          </Typography>
          <Typography component="p" align="center">
            <Button color="primary">Register</Button> or <Button color="secondary">Login</Button> to join a chat room
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
)

export default App
