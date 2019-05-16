import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../Components/Header'
import TodoCard from '../Components/TodoCard'
import TodoActions from '../Redux/TodoRedux'

// Styles
import styles from './Styles/LaunchScreenStyles'
import { connect } from 'react-redux'

class LaunchScreen extends Component {
  componentDidMount () {
    this.props.getTodo()
  }

  render () {
    return (
      <View>
        <Header>Tarefas</Header>
        <ScrollView>
          {this.props.todos.map(todo => (
            <TodoCard
              key={todo.id}
              title={todo.title}
              status={todo.completed}
              onPress={() => this.props.navigation.navigate('TodoDetailsScreen', { todo })} />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: () => dispatch(TodoActions.todoRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
