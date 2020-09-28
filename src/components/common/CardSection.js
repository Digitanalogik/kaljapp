import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 2,
    marginBottom: 2, 
    borderBottomWidth: 2,
    borderColor: '#462E00',
    padding: 3,
    backgroundColor: '#97732E',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
