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
    background: '#171717',
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
          Research
        </Typography>
        <Typography variant="h5" component="h2">
          Parkinson's Research
        </Typography>
        <Typography className={classes.pos} color="#ffffff">
          January 2019-May 2019
        </Typography>
        <Typography variant="body2" component="p">
          This spring, I assisted in a research project led by a professor and graduate student focused on creating 
          an app to help assess the effectiveness of certain exercise classes in relieving symptoms felt by Parkinson's 
          patients like fine motor skills, memory, etc. My contribution to the project included writing Python scripts to 
          analyze the raw data collected by the app, and automating the way multiple sets of data were sent to the script, 
          so that by the time the semester had finished, the "master" script could analyze the data for all tests done by 
          any files sent to the script. Before the move to the virtual semester, I also accompanied the graduate student 
          to the physical therapy center each week to help collect the data and develop a friendly relationship with the 
          Parkinson's patients. 
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="inherit">Read my Reflection</Button>
      </CardActions>
    </Card>
  );
}
