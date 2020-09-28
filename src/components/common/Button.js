import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#69BE28',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#163200',
    marginLeft: 0,
    marginRight: 0,
    height: 50,
    width: 50
  },
  textStyle: {
    alignSelf: 'center',
    color: '#11431E',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
  }
};

export { Button };
