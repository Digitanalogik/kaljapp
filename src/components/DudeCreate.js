import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Header, Button, Card, CardSection, InputFlex, InputPicture, RowComponent } from './common';
import CameraComponent from './CameraComponent';
import * as actions from '../actions';

class DudeCreate extends Component {
  state = { 
    name: '',
    image: ''
  };

  nextId = () => {
    return this.props.dudes.allDudes.length + 1;
  };

  addDude = () => {
    let image = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Default-welcomer.png/257px-Default-welcomer.png";
    if (this.state.image.length > 0) {
      image = this.state.image;
    }

    let name = 'Nimetön';
    if (this.state.name.length > 0) {
      name = this.state.name;
    }

    const newDude = {
      id: this.nextId(),
      name: name,
      image: image,
      beers: []
    };

    this.props.addDude(newDude);
    this.setState({ name: '', image: '' });

    this.props.navigation.navigate('DudeList');
  };

  renderDude = (dude) => {
    return (
      <RowComponent 
        image={dude.item.image}
        title={dude.item.name}
        key={dude.item.name}
        text={this.renderDudeDetails(dude.item.name)}
        buttonText="☺"
        showButton="true"
        onPress={() => this.pressButton(dude.item.name)}
      />
    );
  };

  renderDudeDetails = (dude) => {
    for (let i=0; i<this.props.dudes.dudes.length; i++) {
      if (this.props.dudes.dudes[i].name == dude) {
        let total = 0.0;
        let beers = 0;
        for (let j=0; j<this.props.dudes.dudes[i].beers.length; j++) {
          total = total + parseFloat(this.props.dudes.dudes[i].beers[j].price);
          beers++;
        }
        return "Yhteensä: " + beers.toString() + " kpl " + total.toFixed(2) + " €";
      }
    }
  };

  pressButton = (dude) => {
    const beer = { name: 'Lager', price: '1.5', size: '0.33', proof: '4.5' };
    this.props.addBeerToDude(beer, dude);
  };

  getImage = (image) => {
    this.setState({ image: image });
  };

  showCamera = () => {
    if (this.state.image == '') {
      return (
        <View>
          <CameraComponent onGetImage={this.getImage} />
        </View>
      );
    } else {
      return (
        <View style={styles.imageContainerStyle}>
          <Image source={{ uri: this.state.image }} style={styles.imageStyle} />
        </View>
      );
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Lisää hemmo" />

        <Card>
          <CardSection>
            <InputFlex
              label="Nimi"
              placeholder="Syötä hemmon nimi"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              style={{ borderLeftWidth: 2,borderColor: "#462E00" }}
              extraStyleForContainer={{ backgroundColor: '#E4C58B', borderColor: '#462E00', borderWidth: 2 }}
            />
          </CardSection>

          <CardSection>
            <InputPicture
              label="Kuva"
              imageStyle={{ width: 290, height: 290 }}
              imageContainerStyle={{ width: 290, height: 290 }}
            >
              {this.showCamera()}
            </InputPicture>
          </CardSection>

          <CardSection>
            <Button onPress={this.addDude}>Tallenna</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  imageContainerStyle: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderLeftWidth: 2,
    borderColor: "#462E00"
  },
  imageStyle: {
    width: 300,
    height: 300,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 0,
    padding: 5,
  }
};

const mapStateToProps = state => {
  return { dudes: state.dudes };
};

export default connect(mapStateToProps, actions)(DudeCreate);
