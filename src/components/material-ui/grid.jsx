import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CSICard from '../cards/csicard.jsx';
import RCard from '../cards/researchcard.jsx';
import TCard from '../cards/tacard.jsx';
import ATTCard from '../cards/attcard.jsx';
import SSCard from '../cards/sscard.jsx';
import WDCard from '../cards/wdcard.jsx';
import PCard from '../cards/portcard.jsx'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <ATTCard/>
        </Grid>
        <Grid item xs={6}>
          <CSICard/>
        </Grid>
        <Grid item xs={3}>
          <TCard/>
        </Grid>
        <Grid item xs={6}>
          <RCard/>
        </Grid>
        <Grid item xs={3}>
          <SSCard/>
        </Grid>
        <Grid item xs={6}>
          <WDCard/>
        </Grid>
        <Grid item xs={6}>
          <PCard/>
        </Grid>
      </Grid>
    </div>
  );
}
