import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, CardSection, RowComponent, Confirm } from './common';
import * as actions from '../actions';

class DudeDelete extends Component {
  state = { showModal: false, modalText: '' };

  dudesArray = () => {
    return this.props.dudes.allDudes.map(dude => {
      return Object.assign({}, { id: this.props.dudes[dude].id, name: dude, image: this.props.dudes[dude].image }, this);
    });
  };

  renderDude = (dude) => {
    return (
      <RowComponent 
        image={dude.item.image}
        title={dude.item.name}
        key={dude.item.name}
        text={this.renderDudeDetails(dude.item.name)}
        buttonText="−"
        buttonStyle={{ backgroundColor: '#D86262' }}
        showButton="true"
        onPress={() => this.pressButton(dude.item.name)}
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
    this.setState({ showModal: !this.state.showModal, modalText: dude });
  };

  onAccept() {
    this.setState({ showModal: false, modalText: '' });
    this.props.deleteDude(this.props.selectedDude);
    this.props.navigation.navigate('DudeList');
  }

  onDecline() {
    this.setState({ showModal: false, modalText: '' });
  }

  render() {
    return (
      <View>
        <Header headerText="Poista hemmo" />
        <Card>
          <CardSection>
            <FlatList
              data={this.dudesArray()}
              renderItem={this.renderDude}
              keyExtractor={(dude) => dude.name}
            />
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
  return { dudes: state.dudes, selectedDude: state.dudes.selectedDude };
};

export default connect(mapStateToProps, actions)(DudeDelete);
