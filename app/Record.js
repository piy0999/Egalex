import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

import { Recorder } from 'react-native-audio-toolkit';

const filename = 'test.mp4';
let filepath;

class Record extends Component {
  constructor() {
    super();

    this.state = {
      recordButton: 'Preparing...',
      recordButtonDisabled: true
    };
  }

  componentWillMount() {
    this.recorder = null;
    this.reloadRecorder();
  }

  reloadRecorder() {
    if (this.recorder) {
      this.recorder.destroy();
    }

    this.recorder = new Recorder(filename, {
      bitrate: 256000,
      channels: 2,
      sampleRate: 44100,
      quality: 'max'
      //format: 'ac3', // autodetected
      //encoder: 'aac', // autodetected
    });

    this.updateState();
  }

  toggleRecord() {
    if (this.player) {
      this.player.destroy();
    }

    this.recorder.toggleRecord((err, stopped) => {
      if (err) {
        this.setState({
          error: err.message
        });
      }
      if (stopped) {
        this.reloadRecorder();
      }

      this.updateState();
      console.log(this.state.recordButton);
    });

    if (this.recorder.fsPath) {
      this.props.updateAudio(this.recorder.fsPath);
    }
  }

  updateState(err) {
    //console.log(err);
    this.setState({
      recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',
      recordButtonDisabled: !this.recorder || (this.player && !this.player.isStopped)
    });
  }

  render() {
    return (
      <View>
        <Button disabled={this.state.recordButtonDisabled} onPress={() => this.toggleRecord()}>
          {this.state.recordButton}
        </Button>
      </View>
    );
  }
}

//const styles = {};

export default Record;
