/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Movies from './screens/Movies'
import Series from './screens/Series'
import VideoGames from './screens/VideoGames'
import MovieDescription from './screens/MovieDescription'

const TabNavigator = createBottomTabNavigator({
  Movies: Movies,
  Series: Series,
  VideoGames: VideoGames
});

const StackNavigator = createStackNavigator({
  Home: { screen: TabNavigator },
  MovieDescription: { screen: MovieDescription }
})
export default createAppContainer(StackNavigator);

