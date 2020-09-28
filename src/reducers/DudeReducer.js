const INITIAL_STATE = { 
  selectedDude: '',
  allDudes: []
};

/*
const INITIAL_STATE = { 
  selectedDude: 'Unto',
  'Teemu': {
    id: 1,
    name: 'Teemu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Honza_Hole%C4%8Dek_%28avatar%29.png',
    beers: []
  },
  allDudes: ['Teemu']
};
*/

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'reset_dudes':
      return INITIAL_STATE;
    case 'add_dude':
      const newDude = { id: action.payload.id, name: action.payload.name, image: action.payload.image, beers: [] };
      return { ...state, [action.payload.name]: newDude, allDudes: [...state.allDudes, action.payload.name] };
    case 'add_beer_to_dude':
      const { beer, dude, timestamp } = action.payload;
      const newBeer = Object.assign({}, beer, { timestamp: timestamp });
      const ogDude = state[dude];
      return {
        ...state,
        [dude]: {
          ...ogDude,
          beers: ogDude.beers.concat(newBeer)
        }
      };
    case 'remove_beer_from_dude':
      const dudeName = action.payload.dude;
      const theDude = state[dudeName];
      const newBeers = theDude.beers.filter(filterBeer => filterBeer.timestamp !== action.payload.beer.timestamp);
      return {
        ...state,
        [dudeName]: {
          ...theDude,
          beers: newBeers
       }
      };
    case 'select_dude':
      return { ...state, selectedDude: action.payload };
    case 'delete_dude':
      const newDudes = { ...state.dudes };
      delete newDudes[action.payload];
      return { ...state, dudes: newDudes, allDudes: state.allDudes.filter(dude => dude !== action.payload) };
    default:
      return state;
  }
};
