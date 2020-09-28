import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

class TogglerDouble extends Component {
  state = {
    switchValue: false
  };

  constructor(props) {
    super(props);
    this.state = { switchValue: props.value };
  }

  onSwitchChange = () => {
    const newValue = !this.state.switchValue;
    this.setState({ switchValue: newValue });
    this.props.onChange(newValue);
  };

  render() {
    const { containerStyle, labelStyle, switchStyle } = styles;
    const { labelLeft, labelRight } = this.props;

    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{labelLeft}</Text>
        <Switch style={switchStyle} value={this.state.switchValue} onChange={this.onSwitchChange} />
        <Text style={labelStyle}>{labelRight}</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxHeight: 40,
  },
  labelStyle: {
    fontSize: 14,
  },
  switchStyle: {
    marginLeft: 3,
    marginTop: -2
  }
};

export default TogglerDouble;
