// Import libraries for making a component
import React from "react";
import { View, Text, Image } from "react-native";
import TogglerDouble from './TogglerDouble';

// Make a component
const HeaderImage = (props) => {
  const { viewStyle, imageStyle } = styles;

  textStyle = () => {
    let lineHeight = 55;
    if (props.showToggler) {
      lineHeight = 52;
    }
    return {
      paddingLeft: 0,
      marginTop: 5,
      marginBottom: 5,
      paddingBottom: 0,
      fontSize: 42,
      fontWeight: 'bold',
      lineHeight: lineHeight,
      flex: 2,
      minHeight: 28,
      justifyContent: 'flex-end',
      alignSelf: 'flex-start'
    };
  };

  infoStyle = () => {
    let flex = 2;
    if (props.showToggler) {
      flex = 1;
    }
    return  {
      marginTop: -10,
      paddingTop: 0,
      paddingLeft: 3,
      fontSize: 18,
      lineHeight: 20,
      fontWeight: 'normal',
      flex: flex,
      minHeight: 12,
      alignSelf: 'flex-start',
      justifyContent: 'flex-end'
    };
  };

  renderToggler = () => {
    if (props.showToggler) {
      const { labelLeft, labelRight, onTogglerChange } = props;
      return (
        <View style={styles.togglerContainer}>
          <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Näytä:</Text>
          <TogglerDouble style={styles.togglerStyle} labelLeft={labelLeft} labelRight={labelRight} onChange={onTogglerChange} />
        </View>
      );
    }
  };

  return (
    <View style={viewStyle}>
      <Image style={imageStyle} source={{ uri: props.headerImage }} />
      <View style={{ flex: 3, justifyContent: 'space-around', alignItems: 'center', marginLeft: 20 }}>
        <Text style={textStyle()}>{props.headerText}</Text>
        <Text style={infoStyle()}>{props.infoText}</Text>
        {this.renderToggler()}
      </View>
    </View>
  );
};
// Style the component
const styles = {
  viewStyle: {
    backgroundColor: '#6b4701',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  imageStyle: {
    height: 90,
    width: 90,
    margin: 5,
    marginLeft: 5,
    borderWidth: 2,
    borderColor: '#000',
    flex: 1
  },
  buttonStyle: { 
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#B58B38',
    maxWidth: 40,
    maxHeight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 7,
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#231700',
    borderRadius: 5,
  },
  togglerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 3,
    minHeight: 15,
    marginTop: -5
},
  togglerStyle: {
    flex: 1,
    paddingLeft: 0,
  }
};

// Make the component available to other parts of the app
export { HeaderImage };
