import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {
  inputStyle = (multiline) => {
    let inputHeight = 36;

    if (this.props.multiline && this.props.numberOfLines) {
      inputHeight = 36 * parseInt(this.props.numberOfLines);
    }

    return {
      height: Math.min(120, Math.max(25, inputHeight)),
      color: '#000', 
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 2,
      paddingBottom: 2,
      fontSize: 18,
      lineHeight: 18,
      flex: 1,
      alignSelf: 'stretch',
    };
  };

  returnKeyType = () => {
    if (this.props.multiline) {
      return 'none';
    } else {
      return 'next';
    }
  };

  render() {
    const {
      label,
      value,
      placeholder,
      onChangeText,
      keyboardType,
      secureTextEntry,
      multiline,
      numberOfLines,
      style,
      labelStyle,
      extraStyleForContainer,
    } = this.props;
    const { containerStyle, labelStyleDefault } = styles;

    return (
      <View style={[containerStyle, extraStyleForContainer]}>
        <Text style={[labelStyleDefault, labelStyle]}>{label}</Text>
        <TextInput
          value={value}
          placeholder={placeholder}
          autoCorrect={false}
          onChangeText={onChangeText}
          style={[this.inputStyle(multiline), style]}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={this.returnKeyType()}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#EEE',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginLeft: 2,
    marginRight: 2,
    flex: 1,
    flexDirection: 'column',
    height: 55,
    alignItems: 'flex-start',
  },
  labelStyleDefault: {
    color: '#555', 
    fontSize: 12,
    paddingLeft: 10,
  }
};

export { Input };