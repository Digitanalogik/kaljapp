import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Header, RowComponent } from './common';
import { SRM_SCALE, getContrastYIQ } from './BeerSRM';
import * as actions from '../actions';

class BeerList extends Component {
  listBeers = () => {
    const tempImage = "https://findicons.com/files/icons/2317/brilliant_food/128/beer.png";
    if (this.props.beers && this.props.beers.beers) {
      return this.props.beers.beers.map(beer => 
        <RowComponent
          key={beer.name}
          image={beer.image || tempImage}
          title={beer.name}
          text={parseFloat(beer.proof).toFixed(1) + " %  -  " + parseFloat(beer.size).toFixed(2) + " l  -  " + parseFloat(beer.price).toFixed(2) + " €"}
          buttonText="🍺"
          showButton="true"
          onPress={() => this.pressButton(beer)}
          onImagePress={() => this.pressImageButton(beer)}
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
    this.props.navigation.navigate('AddDudeToBeer');
  };

  pressImageButton = (beer) => {
    this.props.selectBeer(beer);
    this.props.navigation.navigate('BeerEdit');
  };

  render() {
    return (
      <View>
        <Header
          headerText="Juomat"
          showButton="true"
          onPress={() => this.props.navigation.navigate('BeerCreate')}
          showDeleteButton="true"
          onPressDelete={() => this.props.navigation.navigate('BeerDelete')}
        />
        <Card>
          <CardSection>
            <ScrollView>{this.listBeers()}</ScrollView>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    selectedDude: state.selectedDude
  };
};

export default connect(mapStateToProps, actions)(BeerList);
