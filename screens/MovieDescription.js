import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class MovieDescription extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: this.props.navigation.getParam('movie')
        }
    }

    render() {
        const { movie } = this.state
        return (
            <View>
                <Text>Voici votre film:</Text>
                <Text>{movie.title}</Text>
                <Text>{movie.date}</Text>
            </View>)
    }
}