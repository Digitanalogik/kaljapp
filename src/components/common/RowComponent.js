import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Button } from './Button';

class RowComponent extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  spinClick = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 350,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      this.props.onImagePress();
    });
  };

  containerStyle = () => {
    let backgroundColor = '#D8B162';
    if (this.props.backgroundColor) {
      backgroundColor = this.props.backgroundColor;
    }

    let containerHeight = 100;
    if (this.props.height) {
      containerHeight = parseInt(this.props.height);
    }

    let borderWidth = 1;
    if (this.props.borderWidth) {
      borderWidth = parseInt(this.props.borderWidth);
    }

    let borderBottom = borderWidth;
    let borderTop = 0;
    let borderLeft = 0;
    let borderRight = 0;
    if (this.props.borderFull == "true") {
      borderTop = borderWidth;
      borderLeft = borderWidth;
      borderRight = borderWidth;
    }

    return {
      height: containerHeight,
      width: null, 
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: backgroundColor,
      borderColor: '#462E00',
      borderBottomWidth: borderBottom,
      borderTopWidth: borderTop,
      borderLeftWidth: borderLeft,
      borderRightWidth: borderRight,
      marginTop: 4,
      marginBottom: 4
    };
  };

  renderButton = () => {
    if (this.props.showButton === "true") {
      const { onPress, buttonText, buttonStyle } = this.props;
      return (
        <View style={styles.buttonContainerStyle}>
          <Button style={buttonStyle} onPress={onPress}>{buttonText}</Button>
        </View>
      );
    } else {
      return null;
    }
  };

  renderImage = () => {
    const { imageStyle } = styles;
    if (this.props.source) {
      return <Image style={imageStyle} source={this.props.source} />;
    } else {
      return <Image style={imageStyle} source={{ uri: this.props.image }} />;
    }
  };

  renderImageButton = () => {
    const { imageContainerStyle } = styles;
    const { onImagePress, imageButtonStyle } = this.props;

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const spinStyle = {
      transform: [{ rotateY: spin }]
    };

    if (onImagePress) {
      return (
        <TouchableWithoutFeedback onPress={this.spinClick} style={[imageButtonStyle]}>
          <Animated.View style={[imageContainerStyle, spinStyle]}>
            {this.renderImage()}
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <View style={imageContainerStyle}>
          {this.renderImage()}
        </View>
      );
    }
  }

  render() {
    const { title, text, textStyle, titleTextStyle, infoTextStyle } = this.props;
    const { textContainerStyle, titleTextStyleDefault, infoTextStyleDefault } = styles;

    return (
      <View style={this.containerStyle()}>
        {this.renderImageButton()}
        <View style={[textContainerStyle, textStyle]}>
          <Text style={[titleTextStyleDefault, titleTextStyle]}>{title}</Text>
          <Text style={[infoTextStyleDefault, infoTextStyle]}>{text}</Text>
        </View>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = {
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 2,
    borderColor: '#000',
    flex: 1,
    maxHeight: 90,
    maxWidth: 90,
    overflow: 'hidden'
  },
  imageStyle: {
    height: 85,
    width: 85
  },
  textContainerStyle: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 2
  },
  titleTextStyleDefault: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28
  },
  infoTextStyleDefault: {
    fontSize: 14,
    fontWeight: 'normal'
  },
  buttonContainerStyle: {
    width: 60,
    height: 50,
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { RowComponent };
