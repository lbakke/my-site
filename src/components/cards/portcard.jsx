import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: '#3d3d3d',
    color: '#ffffff'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="#ffffff" gutterBottom>
          Personal
        </Typography>
        <Typography variant="h5" component="h2">
          Portfolio
        </Typography>
        <Typography className={classes.pos} color="#ffffff">
          May 2019-June 2019
        </Typography>
        <Typography variant="body2" component="p">
          Created my own personal portfolio using React, a language that was completely new to me. 
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="inherit">View the Code</Button>
      </CardActions>
    </Card>
  );
}
