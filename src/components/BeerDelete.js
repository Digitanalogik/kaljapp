import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Header, RowComponent, Confirm } from './common';
import { SRM_SCALE, getContrastYIQ } from './BeerSRM';
import * as actions from '../actions';

class BeerDelete extends Component {
  state = { showModal: false, modalText: '' };

  listBeers = () => {
    const tempImage = "https://findicons.com/files/icons/2317/brilliant_food/128/beer.png";
    if (this.props.beers && this.props.beers.beers) {
      return this.props.beers.beers.map(beer => 
        <RowComponent
          key={beer.name}
          image={beer.image || tempImage}
          title={beer.name}
          text={parseFloat(beer.proof).toFixed(1) + " %  -  " + parseFloat(beer.size).toFixed(2) + " l  -  " + parseFloat(beer.price).toFixed(2) + " €"}
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
  };

  pressButton = (beer) => {
    this.props.selectBeer(beer);
    this.setState({ showModal: !this.state.showModal, modalText: beer.name });
  };

  onAccept() {
    this.setState({ showModal: false, modalText: '' });
    this.props.deleteBeer(this.props.selectedBeer);
    this.props.navigation.navigate('BeerList');
  }

  onDecline() {
    this.setState({ showModal: false, modalText: '' });
  }

  render() {
    return (
      <View>
        <Header headerText="Poista juoma" />
        <Card>
          <CardSection>
            <ScrollView>{this.listBeers()}</ScrollView>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
            noStyle={{ backgroundColor: '#D86262' }}
          >
            <Text style={{ fontWeight: 'bold' }}>Poista {this.state.modalText}?</Text>
          </Confirm>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    selectedDude: state.selectedDude,
    selectedBeer: state.beers.selectedBeer
  };
};

export default connect(mapStateToProps, actions)(BeerDelete);
