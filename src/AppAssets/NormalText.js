import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class NormalText extends Component {
    render() {
        const {style, text} = this.props
        return (
            <Text style={style}>
                {text}
            </Text>
        )
    }
}
