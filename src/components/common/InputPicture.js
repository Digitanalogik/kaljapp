import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class InputPicture extends Component {
  state = {
    height: 36,  //initializing the content text height  
  };

  render() {
    const { containerStyle, labelStyleDefault, imageContainerStyleDefault, imageStyleDefault } = styles;
    const { label, image, children, labelStyle, imageContainerStyle, imageStyle } = this.props;

    return (
      <View style={containerStyle}>
        <Text style={[labelStyleDefault, labelStyle]}>{label}</Text>
        <View style={[imageContainerStyleDefault, imageContainerStyle]}>
          <Image
              style={[imageStyleDefault, imageStyle]}
              source={{ uri: image }} 
            />
          {children}
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#E4C58B',
    borderWidth: 2,
    borderColor: '#462E00',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    overflow: 'hidden'
  },
  labelStyleDefault: {
    color: '#3B2006', 
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    flex: 1
  },
  imageContainerStyleDefault: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 4,
    height: 355,
    width: null,
    margin: 0,
    padding: 0,
  },
  imageStyleDefault: {
    height: 200,
    width: null,
    borderWidth: 1,
    flex: 1,
    alignItems: 'flex-start'
  }
};

export { InputPicture };
