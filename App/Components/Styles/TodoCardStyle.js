import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.steel,
    borderBottomWidth: 0.8
  },
  todoText: {
    flex: 3,
    fontSize: 18,
    textAlign: 'left',
    textTransform: 'capitalize'
  },
  statusText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    paddingLeft: 7
  }
})
