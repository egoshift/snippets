import React from 'react'

import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import theme from '../../config/theme'

const useStyles = makeStyles({
  app: {
    background: theme.colors.dairyCream,
    height: '100%',
    '& [classes*="MuiGrid-item"]': {
      height: '100%',
    }
  },
  container: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    height: '100%',
  },
  nav: {
    background: theme.colors.peachOrange,
  },
  controls: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  formControl: {
    width: '100%',
  },
  snippetArea: {
    background: 'white',
    height: '70%',
    width: '100%',
    borderRadius: 5,
  },
})

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.app}>
        <Grid item xs={2} className={classes.nav}></Grid>
        <Grid item xs>
          <Container className={classes.container}>
            <Typography variant='h2' style={{ textAlign: 'center' }}>Drop your Snippet!</Typography>
            <Grid container justify='space-between' className={classes.controls}>
              <Grid item xs={2}>
                <Typography variant='caption' style={{ textAlign: 'center' }}>My Snippet / Untitled.txt</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Format</InputLabel>
                  <Select>
                    <MenuItem value={10}>TXT</MenuItem>
                    <MenuItem value={20}>MD</MenuItem>
                    <MenuItem value={30}>JS</MenuItem>
                    <MenuItem value={30}>CSS</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField label="Share to people" variant="outlined" className={classes.formControl} />
              </Grid>
            </Grid>
            <Container className={classes.snippetArea}>

            </Container>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App