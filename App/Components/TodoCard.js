import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/TodoCardStyle'

export default class TodoCard extends Component {
  render () {
    const todoStatus = this.props.status ? "Completa" : "Incompleta"

    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text style={styles.todoText}>{this.props.title}</Text>
        <Text style={styles.statusText}>{todoStatus}</Text>
      </TouchableOpacity>
    )
  }
}
