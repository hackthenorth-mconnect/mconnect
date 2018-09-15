import React from 'react';
import { StyleSheet, View } from 'react-native';
import { YouTube } from 'react-native-youtube';

export class MediaViewer extends React.Component {
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });