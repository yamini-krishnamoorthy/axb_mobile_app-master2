import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, View, ScrollView, TouchableOpacity, PixelRatio, Dimensions, Platform, Image
} from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import YouTube from 'react-native-youtube';

const ActivityExerciseComponent = (props) => {

  return (
    <YouTube
      ref={(component) => {
        this._youTubePlayer = component;
      }}
      videoId="KVZ-P-ZI6W4"           // The YouTube video ID
      playlistId="PLF797E961509B4EB5"   // A playlist's ID, overridden by `videoId`
      play={false}                     // control playback of video with true/false
      fullscreen={true}               // control whether the video should play in fullscreen or inline
      loop={true}                     // control whether the video should loop when ended
      style={{ alignSelf: 'stretch', height: 300, width: '93%', margin: 10, backgroundColor: 'black', marginVertical: 10 }}
    />
  );
}

ActivityExerciseComponent.defaultProps = {};

const styles = StyleSheet.create({
});

export default ActivityExerciseComponent;
