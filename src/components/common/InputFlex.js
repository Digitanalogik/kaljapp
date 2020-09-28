import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class InputFlex extends Component {
  state = {
    height: 36,  //initializing the content text height  
  };

  inputStyle = (multiline) => {
    let inputHeight = 36;

    if (this.props.multiline) {
      inputHeight = 72;
    }

    return {
      height: Math.min(120, Math.max(25, this.state.height)),
      width: 200, 
      color: '#000', 
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 2,
      paddingBottom: 2,
      fontSize: 18,
      lineHeight: 18,
      flex: 4,
      borderRadius: 0,
      marginLeft: 2,
    };
  };

  returnKeyType = () => {
    if (this.props.multiline) {
      return 'none';
    } else {
      return 'next';
    }
  };

  renderTextInput = () => {
    const { value, placeholder, onChangeText, keyboardType, multiline, numberOfLines, style } = this.props;

    if (this.props.locked) {
      return (
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={[this.inputStyle(multiline), style]}
          returnKeyType={this.returnKeyType()}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={false}
        />
      );
    } else {
      return (
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={[this.inputStyle(multiline), style]}
          returnKeyType={this.returnKeyType()}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      );
    }
  }

  render() {
    const { containerStyle, labelStyleDefault } = styles;

    const { label, labelStyle, extraStyleForContainer } = this.props;

    return (
      <View style={[containerStyle, extraStyleForContainer]}>
        <Text style={[labelStyleDefault, labelStyle]}>{label}</Text>
        {this.renderTextInput()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#EEE',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyleDefault: {
    color: '#3B2006', 
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    flex: 1
  }
};

export { InputFlex };
