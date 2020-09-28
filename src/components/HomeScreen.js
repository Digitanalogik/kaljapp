import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Header, Card, CardSection, RowComponent } from "./common";
import buttonBeer from "../images/beer.jpg";
import buttonDude from "../images/avatar.jpg";
import buttonHelp from "../images/question.jpg";

class HomeScreen extends Component {
  componentDidMount() {
    //console.log("Reset beers", this.state, this.props);
    //this.props.resetBeers();
    //console.log("Reset dudes", this.state, this.props);
    //this.props.resetDudes();
    //console.log("props = ", this.props);
  }

  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.spinBeer = new Animated.Value(0);
    this.spinDude = new Animated.Value(0);
    this.spinHelp = new Animated.Value(0);
  }

  spinClick = link => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 350,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      switch (link) {
        case "beers":
          this.props.navigation.navigate("BeerList");
          break;
        case "dudes":
          this.props.navigation.navigate("DudeList");
          break;
        case "help":
          this.props.navigation.navigate("Help");
          break;
        default:
          break;
      }
    });
  };

  spinClickBeers = () => {
    this.spinBeer.setValue(0);
    Animated.timing(this.spinBeer, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      this.props.navigation.navigate("BeerList");
    });
  };

  spinClickDudes = () => {
    this.spinDude.setValue(0);
    Animated.timing(this.spinDude, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      this.props.navigation.navigate("DudeList");
    });
  };

  spinClickHelp = () => {
    this.spinHelp.setValue(0);
    Animated.timing(this.spinHelp, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      this.props.navigation.navigate("Help");
    });
  };

  render() {
    const { linkContainer } = styles;

    const spinBeer = this.spinBeer.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    const spinDude = this.spinDude.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    const spinHelp = this.spinHelp.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const spinStyleBeer = {
      transform: [{ rotateX: spinBeer }]
    };
    const spinStyleDude = {
      transform: [{ rotateX: spinDude }]
    };
    const spinStyleHelp = {
      transform: [{ rotateX: spinHelp }]
    };

    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Kaljapp" />

        <Card>
          <CardSection>
            <TouchableWithoutFeedback onPress={() => this.spinClickBeers()}>
              <Animated.View style={[linkContainer, spinStyleBeer]}>
                <RowComponent
                  height="105"
                  borderWidth="2"
                  borderFull="true"
                  source={buttonBeer}
                  title="Juomat"
                  text="Hallitse juomia"
                  showButton="true"
                  buttonText="🍺"
                  onPress={() => this.props.navigation.navigate("BeerList")}
                  onImagePress={() =>
                    this.props.navigation.navigate("BeerList")
                  }
                  borderFull="true"
                  borderWidth={2}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </CardSection>

          <CardSection>
            <TouchableWithoutFeedback onPress={() => this.spinClickDudes()}>
              <Animated.View style={[linkContainer, spinStyleDude]}>
                <RowComponent
                  height="105"
                  borderWidth="2"
                  borderFull="true"
                  source={buttonDude}
                  title="Hemmot"
                  text="Hallitse hemmoja"
                  showButton="true"
                  buttonText="🌝"
                  onPress={() => this.props.navigation.navigate("DudeList")}
                  onImagePress={() =>
                    this.props.navigation.navigate("DudeList")
                  }
                  borderFull="true"
                  borderWidth={2}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </CardSection>

          <CardSection>
            <TouchableWithoutFeedback onPress={() => this.spinClickHelp()}>
              <Animated.View style={[linkContainer, spinStyleHelp]}>
                <RowComponent
                  height="105"
                  borderWidth="2"
                  borderFull="true"
                  source={buttonHelp}
                  title="Ohje"
                  text="Miten tätä käytetään?"
                  showButton="true"
                  buttonText="❔"
                  onPress={() => this.props.navigation.navigate("Help")}
                  onImagePress={() => this.props.navigation.navigate("Help")}
                  borderFull="true"
                  borderWidth={2}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  linkContainer: {
    flex: 1,
    height: 105
  }
};

const mapStateToProps = state => {
  return {
    beers: state.beers,
    dudes: state.dudes,
    selectedBeer: state.beers.selectedBeer,
    selectedDude: state.dudes.selectedDude
  };
};

export default connect(
  mapStateToProps,
  actions
)(HomeScreen);
