import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, HeaderImage, RowComponent, Confirm } from './common';
import { SRM_SCALE, getContrastYIQ } from './BeerSRM';
import * as actions from '../actions';

class DudeDetails extends Component {
  state = { beers: [], total: 0.0, count: 0, showDetails: false, infoText: '', showModal: false, modalText: '' };

  updateSummary = () => {
    let { beers } = this.props.dudes[this.props.dudes.selectedDude];

    //const distinctBeers = [...new Set(beers.map(beer => beer.name))];
    //console.log(distinctBeers);

    let result = beers.reduce(function(r, o) {
      if (r[o.name]) {
        ++r[o.name].count;
        r[o.name].price += Number(o.price);
      } else {
        r[o.name] = {count: 1, price: Number(o.price)};
      }
      return r;
    }, {});

    let totalSum = 0.0;
    const keys = Object.keys(result)
    for (const key of keys) {
      totalSum += result[key].price;
    }

    this.setState({ beers: result, total: totalSum, count: beers.length, infoText: this.renderDetails() });
  };

  componentDidMount() {
    this.updateSummary();
  }

  findBeer = (beerToSearch) => {
    const propBeers = this.props.beers.beers;
    let found = propBeers.find((beer) => beer.name === beerToSearch);
    return found;
  };

  toggleDetails = (newValue) => {
    this.setState({ ...this.state, showDetails: newValue });
  };

  renderDetails = () => {
    return "Yhteensä: " + this.state.count.toString() + " kpl = " + this.state.total.toFixed(2) + " €";
  };

  renderBeersSummary = () => {
    const tempImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Aster_Tataricus.JPG/800px-Aster_Tataricus.JPG";
    let items = [];

    const keys = Object.keys(this.state.beers);
    for (const key of keys) {
      const beer = this.findBeer(key);
      const infoText = this.state.beers[key].count + " kpl = " + this.state.beers[key].price.toFixed(2) + " €";
      items.push(
        <RowComponent
          key={beer.name}
          image={beer.image || tempImage}
          title={beer.name}
          text={infoText}
          backgroundColor={SRM_SCALE[beer.srm]}
          titleTextStyle={{ color: getContrastYIQ(SRM_SCALE[beer.srm]) }}
          infoTextStyle={{ color: getContrastYIQ(SRM_SCALE[beer.srm]) }}
          borderFull="true"
          borderWidth={2}
        />
      );
    }
    return items;
  };

  deleteBeer = (beer) => {
    this.props.removeBeerFromDude(beer, this.props.dudes.selectedDude);

    const { price, count } = this.state.beers[beer.name];
    let newPrice = price - beer.price;
    let newCount = count - 1;
    let totalCount = this.state.count - 1;
    let totalSum = this.state.total - beer.price;
    let newInfo = "Yhteensä: " + totalCount.toString() + " kpl = " + totalSum.toFixed(2) + " €";
    const newObject = { price: newPrice, count: newCount };

    //  state = { beers: [], total: 0.0, count: 0, showDetails: false, infoText: '' };
    let newState = {
      ...this.state,
      showModal: false,
      modalText: '',
      infoText: newInfo,
      count: totalCount,
      total: totalSum,
      beers: { ...this.state.beers, [beer.name]: newObject }
    };
    if (newCount === 0) {
      delete newState.beers[beer.name];
    }

    this.setState(newState);
  };

  beerInfo = (beer) => {
    return (
      parseFloat(beer.proof).toFixed(1) +
      " %  -  " +
      parseFloat(beer.size).toFixed(2) +
      " l  -  " +
      parseFloat(beer.price).toFixed(2) +
      " €\n(" +
      beer.timestamp.toString() +
      ")"
    );
  };

  beerName = () => {
    if (this.props.beers.selectedBeer) {
      return this.props.beers.selectedBeer.name;
    } else {
      return "";
    }
  };

  beerTime = () => {
    if (this.props.beers.selectedBeer) {
      return '\n' + this.props.beers.selectedBeer.timestamp;
    } else {
      return "";
    }
  };

  pressButton = (beer) => {
    this.props.selectBeer(beer);
    this.setState({ showModal: !this.state.showModal, modalText: this.beerInfo(beer) });
  };

  onAccept() {
    this.setState({ showModal: false, modalText: '' });
    this.deleteBeer(this.props.beers.selectedBeer);
  }

  onDecline() {
    this.setState({ showModal: false, modalText: '' });
  }

  renderBeersAll = () => {
    const tempImage = "https://findicons.com/files/icons/2317/brilliant_food/128/beer.png";
    let items = [];

    const { beers } = this.props.dudes[this.props.dudes.selectedDude];
    const keys = Object.keys(beers);
    for (const key of keys) {
      const beer = beers[key];
      const infoText = beer.timestamp;
      items.push(
        <RowComponent
          key={key}
          image={beer.image || tempImage}
          title={beer.name}
          text={infoText}
          buttonText="―"
          showButton="true"
          buttonStyle={{ backgroundColor: '#D86262' }}
          onPress={() => this.pressButton(beer)}
          backgroundColor={SRM_SCALE[beer.srm]}
          titleTextStyle={{ color: getContrastYIQ(SRM_SCALE[beer.srm]) }}
          infoTextStyle={{ color: getContrastYIQ(SRM_SCALE[beer.srm]) }}
          borderFull="true"
          borderWidth={2}
        />
      );
    }
    return items;
  };

  renderBeers = () => {
    if (this.state.showDetails) {
      return this.renderBeersAll();
    } else {
      return this.renderBeersSummary();
    }
  };

  render() {
    return (
      <View>
        <HeaderImage
          headerText={this.props.dudes.selectedDude}
          headerImage={this.props.dudes[this.props.dudes.selectedDude].image}
          infoText={this.renderDetails()}
          showToggler={true}
          labelLeft="Yhteenveto"
          labelRight="Erittely"
          onTogglerChange={this.toggleDetails}
        />
        <Card>
          <ScrollView>{this.renderBeers()}</ScrollView>
        </Card>
        <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
            noStyle={{ backgroundColor: '#D86262' }}
          >
          <Text style={{ fontWeight: 'bold' }}>Poista {this.beerName()}?</Text>
          <Text style={{ fontSize: 14 }}>{this.beerTime()}</Text>
        </Confirm>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    dudes: state.dudes
  };
};

export default connect(mapStateToProps, actions)(DudeDetails);
