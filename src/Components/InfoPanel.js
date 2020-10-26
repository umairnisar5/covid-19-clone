import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoPanel() {
  const [globalDat, setGlobalData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
      let data = await response.json();
      delete data.result[0].source;
      setGlobalData(data.result[0])
    }
    getData();
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalDat).map((val, ind) => {
          return (<Grid item xs={12} sm={4} key={ind}>
            <Paper 
            className={classes.paper}>
            {val}
            </Paper>
          </Grid>
          )
        })}


      </Grid>
    </div>
  );
}
