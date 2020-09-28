export const addDude = (dude) => {
  return {
    type: 'add_dude',
    payload: dude,
  };
};

export const addBeer = (beer) => {
  return {
    type: 'add_beer',
    payload: beer,
  };
};

export const addBeerToDude = (beer, dude) => {
  const time = new Date();

  // For date part: extract numbers as is
  let date = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  // For time part: fill the numbers with leading zeros
  let hours = time.getHours();
  hours = ("0" + hours).slice(-2);

  let min = time.getMinutes();
  min = ("0" + min).slice(-2);

  let sec = time.getSeconds();
  sec = ("0" + sec).slice(-2);

  const timestamp = date + '.' + month + '.' + year + ' klo ' + hours + ':' + min + ':' + sec;

  return {
    type: 'add_beer_to_dude',
    payload: { beer, dude, timestamp }
  };
};

export const removeBeerFromDude = (beer, dude) => {
  return {
    type: 'remove_beer_from_dude',
    payload: { beer, dude }
  };
};

export const selectBeer = (beer) => {
  return {
    type: 'select_beer',
    payload: beer
  };
};

export const selectDude = (dude) => {
  return {
    type: 'select_dude',
    payload: dude
  };
};

export const deleteBeer = (beer) => {
  return {
    type: 'delete_beer',
    payload: beer
  };
};

export const deleteDude = (dude) => {
  return {
    type: 'delete_dude',
    payload: dude
  };
};

export const updateBeer = (beer) => {
  return {
    type: 'update_beer',
    payload: beer,
  };
};

export const resetBeers = () => {
  return {
    type: 'reset_beers'
  };
};

export const resetDudes = () => {
  return {
    type: 'reset_dudes'
  };
};
