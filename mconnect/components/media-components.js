import React from 'react';
import { StyleSheet, View } from 'react-native';
import { YouTube } from 'react-native-youtube';
import { Player } from 'react-native-streaming-audio-player';

// YouTube component to playback YouTube video streams
export class YouTubePlayer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          videoId="5HNnXJMJkY0"   // The YouTube video ID
          play={true}             // control playback of video with true/false
          fullscreen={true}       // control whether the video should play in fullscreen or inline
          loop={true}             // control whether the video should loop when ended

          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}

          style={{ alignSelf: 'stretch', height: 300 }}
        />
      </View>
    );
  }
}

// Audio Player component to playback audio streams
export class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: 0 }
    this.onUpdatePosition = this.onUpdatePosition.bind(this);
  }
  
  onPlay() {
    Player.play(source.url);
  }

  onPause() {
    Player.pause();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-around' }}>
          <Button
            title='Play'
            onPress={() => this.onPlay()}
            color='red'
          />
          <Button
            title='Pause'
            onPress={() => this.onPause()}
            color='red'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});