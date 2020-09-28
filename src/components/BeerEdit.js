import React, { Component } from 'react';
import { View, Text, Picker, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Header, Input, InputFlex, InputPicture } from './common';
import CameraComponent from './CameraComponent';
import * as actions from '../actions';
import { SRM_SCALE } from './BeerSRM';

class BeerEdit extends Component {
  state = { 
    name: '',
    price: '',
    description: '',
    image: '',
    color: '',
    srm: '1',
    total: '',
    size: '',
    proof: '',
    beers: []
  };

  constructor(props) {
    super(props);
    this.state.size = '0.5';
  }

  componentDidMount() {
    this.setState({
      name: this.props.selectedBeer.name,
      price: this.props.selectedBeer.price,
      description: this.props.selectedBeer.description,
      image: this.props.selectedBeer.image,
      color: this.props.selectedBeer.color,
      srm: this.props.selectedBeer.srm,
      size: this.props.selectedBeer.size,
      proof: this.props.selectedBeer.proof
    });
  }

  addBeer = () => {
    const newBeer = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      image: this.state.image,
      color: this.state.color,
      srm: this.state.srm,
      size: this.state.size,
      proof: this.state.proof
    };

    this.setState({
      name: '',
      price: '',
      description: '',
      image: '',
      color: '',
      srm: '1',
      size: '0.5',
      proof: '', 
      beers: [ ...this.state.beers, newBeer ]
    });
    this.props.addBeer(newBeer);
    this.props.navigation.navigate('BeerList');
  };

  saveBeer = () => {
    const theBeer = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      image: this.state.image,
      color: this.state.color,
      srm: this.state.srm,
      size: this.state.size,
      proof: this.state.proof
    };

    this.props.updateBeer(theBeer);
    this.props.navigation.navigate('BeerList');
  };

  getImage = (image) => {
    this.setState({ image: image });
  };

  showCamera = () => {
    if (this.state.image === '') {
      return (
        <View
          style={{ heigth: 290, marginTop: 0, padding: 0, overflow: 'hidden' }}
        >
          <CameraComponent
            onGetImage={this.getImage}
            containerStyle={{ width: 290, height: 290 }}
            previewStyle={{ width: 290, height: 290 }}/>
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

  renderSRMPickerItem = (value) => {
    return (
      <Picker.Item
        label={value.toString()}
        value={value.toString()}
        key={value}
      />
    );
  };

  renderSRMPicker = () => {
    let items = [];
    for (let i = 1; i <= 30; i++) {
      items.push(this.renderSRMPickerItem(i));
    }
    return items;
  };

  srmPickerStyle = () => {
    let pickerContainerStyle = {
      backgroundColor: '#EEE',
      borderWidth: 2,
      borderColor: '#462E00',
      borderRadius: 2,
      marginLeft: 2,
      marginRight: 2,
      height: 55,
      flex: 1,
    };

    pickerContainerStyle.backgroundColor = SRM_SCALE[parseInt(this.state.srm)];
    return pickerContainerStyle;
  };

  render() {
    return (
      <View>
        <Header headerText="Muokkaa juomaa" />

        <Card>
          <CardSection>
            <InputFlex
              label="Nimi"
              placeholder="Syötä juoman nimi"
              value={this.state.name}
              onChangeText={() => {}}
              style={{ borderLeftWidth: 2,borderColor: "#462E00" }}
              labelStyle={{ fontSize: 14 }}
              extraStyleForContainer={{ flex: 3, backgroundColor: '#E4C58B', borderColor: '#462E00', borderWidth: 2 }}
              locked={true}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Hinta"
              placeholder="Euroa"
              keyboardType="numeric"
              maxLength={5}
              value={this.state.price}
              onChangeText={value => this.setState({ price: value.toString() })}
              labelStyle={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}
              extraStyleForContainer={{ backgroundColor: '#E4C58B', borderColor: '#462E00', borderWidth: 2 }}
            />
            <Input
              label="Alkoholi"
              placeholder="%"
              keyboardType="numeric"
              value={this.state.proof}
              onChangeText={proof => this.setState({ proof })}
              labelStyle={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}
              extraStyleForContainer={{ backgroundColor: '#E4C58B', borderColor: '#462E00', borderWidth: 2 }}
            />

            <View style={styles.pickerContainerStyle}>
              <Text style={styles.pickerLabelStyle}>Koko</Text>
              <Picker
                style={styles.pickerStyle}
                selectedValue={this.state.size}
                onValueChange={size => this.setState({ size })}
              >
                <Picker.Item label="0.5" value="0.5" />
                <Picker.Item label="0.33" value="0.33" />
              </Picker>
            </View>

            <View style={this.srmPickerStyle()}>
              <Text style={styles.pickerLabelStyle}>SRM</Text>
              <Picker
                style={styles.srmPickerStyle}
                selectedValue={this.state.srm}
                onValueChange={srm => this.setState({ srm })}
              >
                {this.renderSRMPicker()}
              </Picker>
            </View>
          </CardSection>

          <CardSection>
            <Input
              label="Kuvaus"
              placeholder="Kerro jotain ominaisuuksista..."
              multiline={true}
              numberOfLines={3}
              labelStyle={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}
              extraStyleForContainer={{ height: 102, backgroundColor: '#E4C58B', borderColor: '#462E00', borderWidth: 2 }}
              value={this.state.description}
              onChangeText={description => this.setState({ description })}
            />
          </CardSection>

          <CardSection>
            <InputPicture
              label="Kuva"
              labelStyle={{ fontSize: 14 }}
              imageStyle={{ width: 290, height: 290 }}
              imageContainerStyle={{ width: 290, height: 290 }}
            >
              {this.showCamera()}
            </InputPicture>
          </CardSection>

          <CardSection>
            <Button onPress={this.saveBeer}>Tallenna</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  pickerContainerStyle: {
    backgroundColor: '#E4C58B',
    borderWidth: 2,
    borderColor: '#462E00',
    borderRadius: 2,
    marginLeft: 2,
    marginRight: 2,
    height: 55,
    flex: 1,
  },
  pickerLabelStyle: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 5,
    flex: 1,
  },
  pickerStyle: { 
    flex: 1,
    height: 50,
    width: 100,
  },
  srmPickerStyle: {
    fontSize: 12,
    lineHeight: 10,
    marginTop: 5,
    height: 26,
  },
  imageContainerStyle: {
    width: 290,
    height: 290,
    overflow: 'hidden',
    borderLeftWidth: 2,
    borderColor: "#462E00"
  },
  imageStyle: {
    width: 290,
    height: 290,
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 0,
    padding: 5,
  },
};

const mapStateToProps = state => {
  return {
    selectedBeer: state.beers.selectedBeer
  };
};

export default connect(mapStateToProps, actions)(BeerEdit);
