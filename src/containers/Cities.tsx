import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import useWeather from '../hooks/weather';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    minHeight: 'border-box',
  },
  listItem: {
    padding: '10px',
    flexWrap: 'wrap'
  },
  selectedListItem: {
    backgroundColor: '#ccccca',
    '& .MuiListItemText-primary': {
      color: 'black',
      fontSize: '14px'
    }
  },
  itemText: {
    color: '#444'
  },
  primaryText: {
    fontWight: 500
  },
  btnContainer: {
    padding: '12px',
    '& button': {
      width: '100px',
      lineHeight: '24px',
      backgroundColor: '#bfd730',
      borderRadius: '5px',
      fontSize: '14px',
      float: 'right',
      '&:hover': {
        backgroundColor: '#bfd730'
      }
    }
  },
  list: {
    backgroundColor: '#ffffff'
  }
}));

const Cities = () => {
  const styles = useStyles();
  const [weather, fetchWeatherData] = useWeather();
  const { cities = [],  fetching = false, error = null, weatherData } = weather;
  const [selectedCityId, selectCity] = useState<number>(0);

  return (
    <main className={styles.container}>
      <List aria-label='payment methods' disablePadding className={styles.list}>
        {cities.map((city: { id: number; name: string }) => (
          <ListItem
            key={city.id}
            button
            divider
            selected={!!selectedCityId && city.id === selectedCityId}
            classes={{ root: styles.listItem, selected: styles.selectedListItem }}
            onClick={() => {selectCity(city.id)}}
          >
            <ListItemText primary={city.name} classes={{ root: styles.itemText }} />
          </ListItem>
        ))}
      </List>
      <section className={styles.btnContainer}>
        <Button onClick={() => fetchWeatherData(selectedCityId)}>{fetching ? 'Fetching...' : 'Fetch'}</Button>
      </section>
      {
        !fetching && (weatherData || error) &&
        <section>
          {
            error ? 
            <div> {error.toString()} </div> :
            <div> { weatherData }</div>
          }
        </section>
      }
    </main>
  );
};

export default Cities;
