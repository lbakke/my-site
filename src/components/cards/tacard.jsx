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
          Employment
        </Typography>
        <Typography variant="h5" component="h2">
          Teaching Assistant
        </Typography>
        <Typography className={classes.pos} color="#ffffff">
          September 2019-May 2020
        </Typography>
        <Typography variant="body2" component="p">
          In the fall semester, I was a teaching assistant for the Fundamentals of Computing course (taught in C++ and CS sophomores) and in the spring, I was a teaching assistant for the Principals of Computing course 
          (taught in Python and for non-computer science majors). Both consisted of holding office hours, assisting 
          students with questions and grading.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="inherit">Visit the Site</Button>
      </CardActions>
    </Card>
  );
}
