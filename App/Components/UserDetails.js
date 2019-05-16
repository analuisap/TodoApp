import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/UserDetailsStyle'

export default class UserDetails extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>Criador da tarefa: {this.props.user}</Text>
        <Text style={styles.infoText}>Email: {this.props.email}</Text>
        <Text style={styles.infoText}>Telefone: {this.props.phone}</Text>
      </View>
    )
  }
}
