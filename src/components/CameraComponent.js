import React, { Component } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import TogglerDouble from './common/TogglerDouble'; 

class CameraComponent extends Component {
  state = {
    useFlash: true
  };

  onTogglerChange = (newValue) => {
    this.setState({ useFlash: newValue });
  };

  renderToggler = () => {
    return (
      <View style={styles.togglerContainer}>
        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Salama:</Text>
        <TogglerDouble value={this.state.useFlash} style={styles.togglerStyle} labelLeft="Pois" labelRight="Päällä" onChange={this.onTogglerChange} />
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={[styles.preview, this.props.previewStyle]}
          ratio='1:1'
          captureAudio={false}
          type={RNCamera.Constants.Type.back}
          flashMode={(this.state.useFlash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off)}
          androidCameraPermissionOptions={{
            title: 'Kameran käyttöoikeus',
            message: 'Kameran käyttöön tarvitaan lupa. Sallitko?',
            buttonPositive: 'Kyllä',
            buttonNegative: 'Ei'
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={styles.captureButton}> Ota kuva </Text>
          </TouchableOpacity>
        </View>
        {this.renderToggler()}
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      await this.checkPermissions();
      const options = {
        quality: 0.9,
        base64: true,
        fixOrientation: true,
        writeExif: true
      };
      const data = await this.camera.takePictureAsync(options)
        .then(async (data) => {
          await CameraRoll.saveToCameraRoll(data.uri);
          this.props.onGetImage(data.uri);
        })
        .catch((error) => {
          console.log("Camera problem!", error);
        });
    }
  };

  checkPermissions = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#EEE',
    height: 400,
    width: 300,
    paddingTop: 5,
    borderLeftWidth: 2,
    borderColor: "#462E00",
  },
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 300,
    width: null,
    marginTop: 5
  },
  capture: {
    flex: 1,
    backgroundColor: '#916818',
    borderTopWidth: 2,
    borderColor: '#462E00',
    borderRadius: 0,
    padding: 10,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  togglerContainer: {
    position: 'absolute',
    top: 0,
    left: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 3,
    minHeight: 15,
    marginTop: 5,
    maxHeight: 35,
    backgroundColor: 'transparent',
  },
  togglerStyle: {
    flex: 1,
    paddingLeft: 0,
  }
};

export default CameraComponent;
