import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, HeaderImage, RowComponent } from './common';
import { SRM_SCALE, getContrastYIQ } from './BeerSRM';
import * as actions from '../actions';

class AddBeerToDude extends Component {
  listBeers = () => {
    const tempImage = "https://findicons.com/files/icons/2317/brilliant_food/128/beer.png";
    if (this.props.beers && this.props.beers.beers) {
      return this.props.beers.beers.map(beer => 
        <RowComponent
          key={beer.name}
          image={beer.image || tempImage}
          title={beer.name}
          text={parseFloat(beer.proof).toFixed(1) + " %  -  " + parseFloat(beer.size).toFixed(2) + " l  -  " + parseFloat(beer.price).toFixed(2) + " €"}
          buttonText="➕"
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
    this.props.addBeerToDude(beer, this.props.dudes.selectedDude);
    this.props.navigation.navigate('DudeList');
  };

  pressImageButton = (beer) => {
    this.props.selectBeer(beer);
    this.props.navigation.navigate('BeerEdit');
  };

  renderHeader = () => {
    return "Lisää juoma ➔ " + this.props.dudes.selectedDude.name;
  };

  render() {
    const dude = this.props.dudes[this.props.dudes.selectedDude];
    return (
      <View>
        <HeaderImage
          headerText={this.props.dudes.selectedDude}
          headerImage={dude.image}
          infoText="Valitse lisättävä juoma..."
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
    dudes: state.dudes,
  };
};

export default connect(mapStateToProps, actions)(AddBeerToDude);
