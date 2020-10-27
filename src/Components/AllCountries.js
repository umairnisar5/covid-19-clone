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
  title: {
    color: '#3f51b5'
  }
}));

export default function AllCountries() {
  const [globalData, setGlobalData] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await response.json();
    
      setGlobalData(Object.values(Object.values(data.countryitems )[0])) ;
    }
    getData();
  }, [])
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table>
      <tr>
          <td>Country Name</td>
          <td>Total Cases</td>
          <td>active Cases</td>
      </tr>

        {globalData.map((key, ind) => {
          return (
            <tr>
                <td>{globalData[ind].title}</td>
                <td>
                    {globalData[ind].total_cases}
                </td>
                <td>
                
                {globalData[ind].total_active_cases}
                </td>
            </tr>
           
           
            
          )
        })}

        </table>
    </div>
  );
}
