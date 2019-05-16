import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/HeaderStyle'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text onPress={this.props.onPress} style={styles.titleText}>{this.props.children}</Text>
      </View>
    )
  }
}
