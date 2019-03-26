import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import CustomMovieListItem from '../components/CustomMovieListItem'
import { movies } from '../resources/database/moviesData'

export default class Movies extends Component {
  onItemClick = (item) => {
    this.props.navigation.navigate('MovieDescription', { movie: item })
  }

  render() {
    return (
    <View>
        <FlatList
            data={movies}
            renderItem={({item}) => <CustomMovieListItem item={item} onItemClick={this.onItemClick} />}
        />
    </View>)
  }
}