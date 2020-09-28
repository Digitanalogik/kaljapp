import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { HeaderImage, Card, CardSection, RowComponent } from './common';
import * as actions from '../actions';

class AddDudeToBeer extends Component {
  dudesArray = () => {
    return this.props.dudes.allDudes.map(dude => {
      return Object.assign({}, { id: this.props.dudes[dude].id, name: dude, image: this.props.dudes[dude].image }, this);
    });
  };

  renderDude = (dude) => {
    const { name } = dude.item;
    return (
      <RowComponent 
        image={dude.item.image}
        title={dude.item.name}
        key={name}
        text={this.renderDudeDetails(name)}
        buttonText="➕"
        showButton="true"
        onPress={() => this.pressButton(name)}
        onImagePress={() => this.pressImageButton(name)}
        borderFull="true"
        borderWidth={2}
      />
    );
  };

  renderDudeDetails = (dude) => {
    let sum = this.props.dudes[dude].beers.reduce(function (accumulator, currentValue) {
      return accumulator + parseFloat(currentValue.price);
    }, 0);
    return "Yhteensä: " + this.props.dudes[dude].beers.length.toString() + " kpl = " + sum.toFixed(2) + " €";
  };

  pressButton = (dude) => {
    this.props.selectDude(dude);
    this.props.addBeerToDude(this.props.selectedBeer, dude);
    this.props.navigation.navigate('BeerList');
  };

  pressImageButton = (dude) => {
    this.props.selectDude(dude);
    this.props.navigation.navigate('DudeDetails');
  };

  renderHeader = () => {
    return this.props.selectedBeer.size + " l " + this.props.selectedBeer.name + " " + parseFloat(this.props.selectedBeer.price).toFixed(2) + " €" ;
  };

  render() {
    return (
      <View>
        <HeaderImage
          headerText={this.props.selectedBeer.name}
          headerImage={this.props.selectedBeer.image}
          infoText={parseFloat(this.props.selectedBeer.proof).toFixed(1) + " %  -  " + parseFloat(this.props.selectedBeer.size).toFixed(2) + " l  -  " + parseFloat(this.props.selectedBeer.price).toFixed(2) + " €"}
        />
        <Card>
          <CardSection>
            <FlatList
              data={this.dudesArray()}
              renderItem={this.renderDude}
              keyExtractor={(dude) => dude.name}
            />
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
    selectedBeer: state.beers.selectedBeer,
    selectedDude: state.dudes.selectedDude,
  };
};

export default connect(mapStateToProps, actions)(AddDudeToBeer);
