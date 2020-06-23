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
    background: '#ffffff',
    color: '#000000'
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
          Internship
        </Typography>
        <Typography variant="h5" component="h2">
          Coherent Solutions Inc.
        </Typography>
        <Typography className={classes.pos} color="#ffffff">
          June 2019-August 2019
        </Typography>
        <Typography variant="body2" component="p">
          I spent one month immersed in the company's training program in Minsk, Belarus and finished the rest of the summer
          remotely in their corporate office. I worked on SportsEngine's project Advanced Event Systems, a website used to 
          plan youth sports tournaments. Working in an agile scrum environment, I completed tickets involving both the back-end
          in C# as well as the front-end Angular javascript tickets. 
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="inherit">Visit the Site</Button>
      </CardActions>
    </Card>
  );
}
