import React from 'react';
import { View, Image, Keyboard } from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import { Recorder } from 'react-native-audio-toolkit';
import { GradientButton } from '../../components/';
import { scale, scaleModerate, scaleVertical } from '../../utils/scale';
import ExpoRecord from './ExpoRecord';

export class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      audio: ''
    };
  }

  componentWillMount() {
    _loadAssets = async () => {
      await Font.loadAsync({
        fontawesome: require('../../assets/fonts/fontawesome.ttf')
      });
      this.setState({ loaded: true });
    };
  }

  submitCase() {
    const audio = {
      uri: this.state.audio,
      type: 'audio/wav',
      name: 'test.wav'
    };

    const body = new FormData();
    body.append('audio', audio);
    body.append('title', this.state.title);
    body.append('description', this.state.description);
    fetch('http://52.237.72.190:8080/upload', {
      method: 'POST',
      body
    })
      .then(response => {
        /*const newBody = new FormData();
        console.log(response.title);
        newBody.append('title', response.title);
        newBody.append('description', response.description);
        newBody.append('transcription', response.transcription);*/
        this.props.navigation.navigate('Dashboard');
      })
      .catch(error => {
        console.log(error);
        this.props.navigation.navigate('Dashboard');
      });
  }

  updateAudio = audio => {
    this.setState({
      audio
    });
  };

  render() {
    let renderIcon = () => {
      if (RkTheme.current.name === 'light')
        return (
          <Image
            style={styles.image}
            source={require('../../assets/images/logo.png')}
          />
        );
      return (
        <Image
          style={styles.image}
          source={require('../../assets/images/logoDark.png')}
        />
      );
    };
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={{ alignItems: 'center' }}>
          {renderIcon()}
          <RkText rkType="h1">Register Case</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput
              rkType="rounded"
              placeholder="Name"
              onChangeText={title => this.setState({ title })}
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Contact Number"
              onChangeText={description => this.setState({ description })}
            />
            <ExpoRecord updateAudio={this.updateAudio} />
            <GradientButton
              style={styles.save}
              rkType="large"
              text="SUBMIT"
              onPress={() => {
                this.submitCase();
              }}
            />
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 5,
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  content: {
    justifyContent: 'space-around'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around'
  },
  footer: {
    justifyContent: 'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
}));
