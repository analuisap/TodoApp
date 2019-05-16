import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import UserDetails from '../Components/UserDetails'

// Styles
import styles from './Styles/TodoDetailsScreenStyle'

class TodoDetailsScreen extends Component {
  findUserById = (todo) => {
    const { users } = this.props
    let foundUser = {}
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === todo.userId) {
        foundUser = users[i]
        break
      }
    }
    return foundUser
  }

  render () {
    const todo = this.props.navigation.getParam('todo')
    const user = this.findUserById(todo)
    const todoStatus = todo.completed ? "Completa" : "Incompleta"

    return (
      <View>
        <Header onPress={() => this.props.navigation.goBack()}>Voltar</Header>
        <View style={styles.container}>
          <Text style={styles.titleText}>{todo.title}</Text>
          <Text style={styles.statusText}>Status: {todoStatus}</Text>
          <UserDetails user={user.name} email={user.email} phone={user.phone} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailsScreen)
