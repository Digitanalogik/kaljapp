// Import libraries for making a component
import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

// Make a component
const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  renderButton = () => {
    if (props.showButton) {
      return (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <Text style={styles.buttonStyle}>➕</Text>
        </TouchableWithoutFeedback>
      );
    }
  };

  renderDeleteButton = () => {
    if (props.showDeleteButton) {
      return (
        <TouchableWithoutFeedback onPress={props.onPressDelete}>
          <Text style={styles.deleteButtonStyle}> ―</Text>
        </TouchableWithoutFeedback>
      );
    }
  };

  return (
    <View style={viewStyle}>
      {renderDeleteButton()}
      <Text style={textStyle}>{props.headerText}</Text>
      {renderButton()}
    </View>
  );
};
// Style the component
const styles = {
  viewStyle: {
    backgroundColor: '#6b4701',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  textStyle: {
    paddingLeft: 50,
    fontSize: 22,
    fontWeight: 'bold',
    flex: 5
  },
  buttonStyle: { 
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#69BE28',
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
  deleteButtonStyle: { 
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#D86262',
    maxWidth: 40,
    maxHeight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 7,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: '#231700',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

// Make the component available to other parts of the app
export { Header };
