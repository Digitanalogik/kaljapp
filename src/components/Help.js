import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight, Dimensions } from 'react-native';
import { Card, CardSection, Header } from './common';
import homeScreen from '../images/help/01-HomeScreen-thumbnail-with-arrows.png';
import beerScreen from '../images/help/02-Juomat-thumbnail-with-arrows.png';
import beerAddScreen from '../images/help/02-1-Juomat-Lisaa-thumbnail.png';
import beerDeleteScreen from '../images/help/02-2-Juomat-Poista-thumbnail.png';
import beerSellScreen from '../images/help/02-3-Juomat-Myy-thumbnail.png';
import beerEditScreen from '../images/help/02-4-Juomat-Muokkaa-thumbnail.png';
import dudeScreen from '../images/help/03-Hemmot-thumbnail-with-arrows.png';
import dudeAddScreen from '../images/help/03-1-Hemmot-Lisää-thumbnail.png';
import dudeDeleteScreen from '../images/help/03-2-Hemmot-Poista-thumbnail.png';
import dudeSellScreen from '../images/help/03-3-Hemmot-Myy-thumbnail.png';
import dudeDetailsScreen from '../images/help/03-4-Hemmot-Tiedot-thumbnail.png';

class Help extends Component {
  state = {
    screenHeight: 0,
    screenWidth: 0,
    netHeight: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
      netHeight: Dimensions.get('window').height - 70,
    };
  }

  scrollToTop = () => {
    this.scroller.scrollTo({ x: 0, y: 0, animated: true });
  };

  scrollToHome = () => {
    let scrollYPos = this.state.netHeight * 1 - 10;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToBeers = () => {
    let scrollYPos = (this.state.netHeight * 2) - 29;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToBeersAdd = () => {
    let scrollYPos = (this.state.netHeight * 3) - 48;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToBeersDelete = () => {
    let scrollYPos = (this.state.netHeight * 4) - 65;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToBeersSell = () => {
    let scrollYPos = (this.state.netHeight * 5) - 85;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToBeersEdit = () => {
    let scrollYPos = (this.state.netHeight * 6) - 100;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToDudes = () => {
    let scrollYPos = this.state.netHeight * 7 - 120;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToDudesAdd = () => {
    let scrollYPos = this.state.netHeight * 8 - 138;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToDudesDelete = () => {
    let scrollYPos = this.state.netHeight * 9 - 155;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToDudesSell = () => {
    let scrollYPos = this.state.netHeight * 10 - 173;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  scrollToDudesDetails = () => {
    let scrollYPos = this.state.netHeight * 11 - 185;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
  };

  renderHelpHome = () => {
    const { section, image, instructions, heading, subHeading, instructionText, instructionList } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <Image style={image} source={homeScreen} />
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToHome()}>
            <Text style={heading}>Alkunäyttö</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Päänäkymä, joka näytetään heti kun sovellus käynnistyy.</Text>
          <Text style={instructionText}>Valitse toiminto painamalla joko:</Text>
          <Text style={instructionList}>#1 kuvake (vasen reuna)</Text>
          <Text style={instructionList}>#2 painike (oikea reuna)</Text>

          <Text style={[instructionText, { fontWeight: 'bold', marginTop: 10 }]}>Alkunäytön toiminnot:</Text>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[instructionText, { fontSize: 16 }]}>Juomalista = </Text>
            <TouchableHighlight onPress={() => this.scrollToBeers()}>
              <Text style={[subHeading, { marginLeft: 2 }]}>Juomat</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[instructionText, { fontSize: 16 }]}>Hemmolista = </Text>
            <TouchableHighlight onPress={() => this.scrollToDudes()}>
              <Text style={[subHeading, { marginLeft: -5 }]}>Hemmot</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[instructionText, { fontSize: 16 }]}>Tämä ohje = </Text>
            <TouchableHighlight onPress={() => this.scrollToTop()}>
              <Text style={[subHeading, { marginLeft: 7 }]}>Ohje</Text>
            </TouchableHighlight>
          </View>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpBeers = () => {
    const { section, image, instructions, heading, subHeading, instructionText, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 385, height: 182, marginLeft: 5 }]} source={beerScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToBeers()}>
            <Text style={heading}>Juomat</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Juomalistaan on lueteltu kaikki tunnetut juomat sekä tiivistelmä kunkin ominaisuuksista (nimi, alkoholipitoisuus, annoskoko, hinta, SRM/väri).</Text>

          <Text style={[instructionText, { fontWeight: 'bold', marginTop: 10 }]}>Otsikkorivin toiminnot:</Text>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[instructionText, { fontSize: 16 }]}>(―) minus = </Text>
            <TouchableHighlight onPress={() => this.scrollToBeersDelete()}>
              <Text style={[subHeading, { marginLeft: -10 }]}>Poista juoma</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[instructionText, { fontSize: 16 }]}>(+) plus = </Text>
            <TouchableHighlight onPress={() => this.scrollToBeersAdd()}>
              <Text style={[subHeading, { marginLeft: 5 }]}>Lisää juoma</Text>
            </TouchableHighlight>
          </View>

          <Text style={[instructionText, { fontWeight: 'bold', marginTop: 10 }]}>Juomalistan toiminnot:</Text>

          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[instructionText, { fontSize: 16 }]}>#1 Kuvake = </Text> 
            <TouchableHighlight onPress={() => this.scrollToBeersEdit()}>
              <Text style={[subHeading, { marginLeft: -10 }]}>Näytä juoman tiedot</Text>
            </TouchableHighlight>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[instructionText, { fontSize: 16 }]}>#2 Painike = </Text> 
            <TouchableHighlight onPress={() => this.scrollToBeersSell()}>
              <Text style={[subHeading, { marginLeft: -10 }]}>Myy juoma hemmolle</Text>
            </TouchableHighlight>
          </View>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpBeersAdd = () => {
    const { section, image, instructions, heading, instructionText, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 300, height: 211 }]} source={beerAddScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToBeersAdd()}>
            <Text style={heading}>Lisää juoma</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun juomalistan otsikkoriviltä painetaan plus (+) painiketta, näytölle aukeaa lomake, johon täytetään uuden juoman tiedot.</Text>
          <Text style={instructionText}>Täytä juomalle nimi, hinta, alkoholipitoisuus, annoksen koko, SRM ja vapaamuotoinen kuvaus, sekä kuvaa juoma.</Text>
          <Text style={instructionText}>Paina Lisää, niin juoma tallennetaan ja näkymä palaa takaisin juomalistaan.</Text>
          <Text style={instructionText}>Jos haluat peruuttaa lisäämisen, käytä puhelimen Takaisin/Back -näppäintä.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpBeersDelete = () => {
    const { section, image, instructions, heading, instructionText, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 360, height: 155 }]} source={beerDeleteScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToBeersDelete()}>
            <Text style={heading}>Poista juoma</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun juomalistan otsikkoriviltä painetaan minus (―) painiketta, kaikki juomalistan toimintopainikkeet muuttuvat poistopainikkeiksi.</Text>
          <Text style={instructionText}>Valitse juomalistasta juoma, jonka haluat poistaa ja paina sen minus (―) painiketta.</Text>
          <Text style={instructionText}>Jos haluat peruuttaa toiminnon poistamatta mitään juomaa, käytä puhelimen Takaisin/Back -näppäintä.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpBeersSell = () => {
    const { section, image, instructions, heading, instructionText, instructionList, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 360, height: 295 }]} source={beerSellScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToBeersSell()}>
            <Text style={heading}>Myy juoma hemmolle</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun juomalistasta painaa juoman kohdalla toimintopainiketta, näytölle avataan lista hemmoista, joille juoman voi myydä.</Text>
          <Text style={instructionText}>Valitse listalta hemmo, kenelle haluat myydä ko. juoman ja paina hemmon plus (+) painiketta.</Text>
          <Text style={instructionText}>Jos haluat peruuttaa toiminnon myymättä juomaa kenellekään, käytä puhelimen Takaisin/Back -näppäintä.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpBeersEdit = () => {
    const { section, center, image, instructions, heading, instructionText } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 187, height: 300 }]} source={beerEditScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToBeersEdit()}>
            <Text style={heading}>Näytä juoman tiedot</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun juomalistasta painaa juoman kuvaketta, näytölle avataan sen juoman tiedot.</Text>
          <Text style={instructionText}>Juoman tiedot näytetään samanlaisella lomakkeella kuin juoma lisättiin.</Text>
          <Text style={instructionText}>Voit myös muuttaa juoman tietoja tässä näkymässä. Muista lopuksi painaa Tallenna.</Text>
          <Text style={instructionText}>Jos haluat vain palata juomalistaan, käytä puhelimen Takaisin/Back -näppäintä.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpDudes = () => {
    const { section, image, instructions, heading, subHeading, instructionText, instructionList, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 385, height: 182, marginLeft: 5 }]} source={dudeScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToDudes()}>
            <Text style={heading}>Hemmot</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Hemmolistaan on lueteltu kaikki tunnetut hemmot ja yhteenveto juoduista juomista (määrä, hinta).</Text>

          <Text style={[instructionText, { fontWeight: 'bold', marginTop: 10 }]}>Otsikkorivin toiminnot:</Text>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[instructionText, { fontSize: 16 }]}>(―) minus = </Text> 
            <TouchableHighlight onPress={() => this.scrollToDudesDelete()}>
              <Text style={[subHeading, { marginLeft: -10 }]}>Poista hemmo</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[instructionText, { fontSize: 16 }]}>(+) plus = </Text> 
            <TouchableHighlight onPress={() => this.scrollToDudesAdd()}>
              <Text style={[subHeading, { marginLeft: 5 }]}>Lisää hemmo</Text>
            </TouchableHighlight>
          </View>

          <Text style={[instructionText, { fontWeight: 'bold', marginTop: 10 }]}>Hemmolistan toiminnot:</Text>

          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[instructionText, { fontSize: 16 }]}>#1 Kuvake = </Text> 
            <TouchableHighlight onPress={() => this.scrollToDudesDetails()}>
              <Text style={[subHeading, { marginLeft: -10 }]}>Näytä hemmon tiedot</Text>
            </TouchableHighlight>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[instructionText, { fontSize: 16 }]}>#2 Painike = </Text> 
            <TouchableHighlight onPress={() => this.scrollToDudesSell()}>
              <Text style={[subHeading, { marginLeft: -10 }]}>Myy hemmolle juoma</Text>
            </TouchableHighlight>
          </View>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpDudesAdd = () => {
    const { section, image, instructions, heading, instructionText, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 227, height: 300 }]} source={dudeAddScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToDudesAdd()}>
            <Text style={heading}>Lisää hemmo</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun hemmolistan otsikkoriviltä painetaan plus (+) painiketta, näytölle aukeaa lomake, jolla uusi hemmo luodaan.</Text>
          <Text style={instructionText}>Täytä hemmon nimi ja kuvaa hemmo.</Text>
          <Text style={instructionText}>Lopuksi paina Lisää, niin hemmo tallennetaan ja näkymä palaa takaisin hemmolistaan.</Text>
          <Text style={instructionText}>Jos haluat peruuttaa lisäämisen, käytä puhelimen Takaisin/Back -näppäintä.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpDudesDelete = () => {
    const { section, image, instructions, heading, instructionText, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 360, height: 155 }]} source={dudeDeleteScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToDudesDelete()}>
            <Text style={heading}>Poista hemmo</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun hemmolistan otsikkoriviltä painetaan minus (―) painiketta, kaikki hemmolistan toimintopainikkeet muuttuvat poistopainikkeiksi.</Text>
          <Text style={instructionText}>Valitse hemmolistasta hemmo, jonka haluat poistaa ja paina sen minus (―) painiketta.</Text>
          <Text style={instructionText}>Jos haluat peruuttaa toiminnon poistamatta ketään hemmoa, käytä puhelimen Takaisin/Back -näppäintä.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpDudesSell = () => {
    const { section, image, instructions, heading, instructionText, center } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 360, height: 295 }]} source={dudeSellScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToDudesSell()}>
            <Text style={heading}>Myy hemmolle juoma</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun hemmolistasta painaa hemmon kohdalla toimintopainiketta, näytölle avataan lista juomista, joita hemmolle voi myydä.</Text>
          <Text style={instructionText}>Valitse listalta juoma, jonka haluat myydä ja paina sen kohdalla plus (+) painiketta.</Text>
          <Text style={instructionText}>Jos haluat peruuttaa toiminnon myymättä valitulle hemmolle mitään juomaa, käytä puhelimen Takaisin/Back -näppäintä.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelpDudesDetails = () => {
    const { section, center, image, instructions, heading, instructionText } = styles;
    return (
      <View style={[section, this.helpSectionHeight()]}>
        <View style={[center]}>
          <Image style={[image, { width: 360, height: 282 }]} source={dudeDetailsScreen} />
        </View>
        <View style={instructions}>
          <TouchableHighlight onPress={() => this.scrollToDudesDetails()}>
            <Text style={heading}>Näytä hemmon tiedot</Text>
          </TouchableHighlight>

          <Text style={instructionText}>Kun hemmolistasta painaa hemmon kuvaketta, näytölle avataan hemmon tiedot.</Text>
          <Text style={instructionText}>Voit valita näytetäänkö hemmon juomista yhteenveto vai tarkempi erittely.</Text>
          <Text style={instructionText}>Erittelynäkymässä yksittäisiä juomia voi myös poistaa, mikäli tietoja on korjattava.</Text>

          {this.renderScrollToTopLink()}
        </View>
      </View>
    );
  };

  renderHelp = () => {
    return (
      <View style={this.helpStyle()}>
        <TouchableHighlight onPress={() => this.scrollToHome()}>
          <Text style={styles.heading}>Alkunäyttö</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.scrollToBeers()}>
          <Text style={styles.heading}>Juomat</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToBeersAdd()}>
          <Text style={styles.subHeading}>Lisää juoma</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToBeersDelete()}>
          <Text style={styles.subHeading}>Poista juoma</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToBeersSell()}>
          <Text style={styles.subHeading}>Myy juoma hemmolle</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToBeersEdit()}>
          <Text style={styles.subHeading}>Näytä juoman tiedot</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.scrollToDudes()}>
          <Text style={styles.heading}>Hemmot</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToDudesAdd()}>
          <Text style={styles.subHeading}>Lisää hemmo</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToDudesDelete()}>
          <Text style={styles.subHeading}>Poista hemmo</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToDudesSell()}>
          <Text style={styles.subHeading}>Myy hemmolle juoma</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.scrollToDudesDetails()}>
          <Text style={styles.subHeading}>Näytä hemmon tiedot</Text>
        </TouchableHighlight>
      </View>
    );
  };

  renderScrollToTopLink = () => {
    return (
      <TouchableHighlight onPress={() => this.scrollToTop()}>
        <Text style={[styles.heading, { marginTop: 30 }]}>Takaisin alkuun</Text>
      </TouchableHighlight>
    );
  };

  helpStyle = () => {
    return {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      marginLeft: this.state.screenWidth / 8,
      height: this.state.netHeight - 40
    };
  };

  helpSectionHeight = () => {
    return {
      height: this.state.netHeight - 30
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Ohje" />
        <Card>
          <ScrollView
            ref={scroller => {
              this.scroller = scroller;
            }}
          >
            <Text style={styles.infoText}>Valitse ohjeen aihe:</Text>
            <CardSection style={{ alignItems: 'center' }}>{this.renderHelp()}</CardSection>
            <CardSection>{this.renderHelpHome()}</CardSection>
            <CardSection>{this.renderHelpBeers()}</CardSection>
            <CardSection>{this.renderHelpBeersAdd()}</CardSection>
            <CardSection>{this.renderHelpBeersDelete()}</CardSection>
            <CardSection>{this.renderHelpBeersSell()}</CardSection>
            <CardSection>{this.renderHelpBeersEdit()}</CardSection>
            <CardSection>{this.renderHelpDudes()}</CardSection>
            <CardSection>{this.renderHelpDudesAdd()}</CardSection>
            <CardSection>{this.renderHelpDudesDelete()}</CardSection>
            <CardSection>{this.renderHelpDudesSell()}</CardSection>
            <CardSection>{this.renderHelpDudesDetails()}</CardSection>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = {
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  scroller: {
    flex: 1,
    flexDirection: 'column'
  },
  section: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0,
    borderColor: '#000'
  },
  instructions: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#000',
    borderWidth: 0,
    overflow: 'visible'
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#D8B162',
    color: '#000',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
    marginBottom: 2,
    alignSelf: 'flex-start'
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#D8B162',
    color: '#000',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginLeft: 30,
    marginRight: 10,
    marginBottom: 2,
    alignSelf: 'flex-start'
  },
  instructionText: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 18,
  },
  instructionList: {
    marginTop: 0,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
    lineHeight: 18,
  }
};

export default Help;
