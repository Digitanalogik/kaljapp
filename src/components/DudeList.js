import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, CardSection, RowComponent } from './common';
import * as actions from '../actions';

class DudeList extends Component {
  dudesArray = () => {
    return this.props.dudes.allDudes.map(dude => {
      return Object.assign({}, { id: this.props.dudes[dude].id, name: dude, image: this.props.dudes[dude].image }, this);
    });
  };

  renderDude = (dude) => {
    const { dudes } = this.props;
    const { name } = dude.item;

    return (
      <RowComponent 
        image={dudes[name].image}
        title={name}
        key={dudes[name].id}
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
    this.props.navigation.navigate('AddBeerToDude');
  };

  pressImageButton = (dude) => {
    this.props.selectDude(dude);
    this.props.navigation.navigate('DudeDetails');
  };

  render() {
    return (
      <View>
        <Header 
          headerText="Hemmot"
          showButton="true"
          onPress={() => this.props.navigation.navigate('DudeCreate')}
          showDeleteButton="true"
          onPressDelete={() => this.props.navigation.navigate('DudeDelete')}
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
  return { dudes: state.dudes, allDudes: state.allDudes };
};

export default connect(mapStateToProps, actions)(DudeList);
