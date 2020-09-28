const INITIAL_STATE = {
  beers: [
    {
      name: 'Lager',
      size: '0.33',
      price: '1.5',
      proof: '4.5',
      srm: 10,
      description: 'mieto',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Weizenbier-ukko.jpg'
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'reset_beers':
      return INITIAL_STATE;
    case 'add_beer':
      return { ...state, beers: [ ...state.beers, action.payload ] };
    case 'select_beer':
      return { ...state, selectedBeer: action.payload };
    case 'delete_beer':
      return { ...state, beers: state.beers.filter(beer => beer.name !== action.payload.name) };
    case 'update_beer':
      return { ...state, beers: doUpdate(state, action) };
    default:
      return state;
  }
};

const doUpdate = (state, action) => {
  return state.beers.map((item, index) => {
    // Find the item with the matching id
    if (item.name === action.payload.name) {
      // Return a new object
      return {
        ...item, // copy the existing item
        price: action.payload.price, // replace the price
        proof: action.payload.proof,
        size: action.payload.size,
        srm: action.payload.srm,
        description: action.payload.description,
        image: action.payload.image,
      };
    }
    // Leave every other item unchanged
    return item;
  });
};
