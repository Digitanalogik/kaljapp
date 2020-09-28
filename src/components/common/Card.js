import React from 'react';
import { View, Dimensions } from 'react-native';

const Card = (props) => {
  return (
    <View style={cardStyle()}>
      {props.children}
    </View>
  );
};

function cardStyle() {
  let screenHeight = Dimensions.get("window").height;

  return {
    height: screenHeight - 70, 
    borderWidth: 2,
    borderRadius: 0,
    borderColor: '#462E00',
    borderBottomWidth: 0,
    backgroundColor: '#97732E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 3
  };
}

export { Card };
