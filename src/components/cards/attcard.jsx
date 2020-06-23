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
    background: '#e6fcff',
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
          AT&T
        </Typography>
        <Typography className={classes.pos} color="#ffffff">
          June 2020-August 2020
        </Typography>
        <Typography variant="body2" component="p">
          This internship just started so I have basically no info! but, gotta make it even so, 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac magna tellus. Sed porta pharetra turpis 
          vel laoreet. Sed ut pharetra urna, et egestas mauris. In non magna nec sem molestie elementum. Morbi vitae 
          tortor malesuada, finibus eros et, consectetur tellus. Donec et pulvinar quam. Ut eu interdum ante.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="inherit">Visit the Site</Button>
      </CardActions>
    </Card>
  );
}
