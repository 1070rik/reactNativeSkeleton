import {StyleSheet} from 'react-native';
import {Colors} from '../Themes/Main';

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor,
    borderBottomWidth: 0,
    borderBottomColor: '#fff',
    margin: 0,
    textAlign: 'center',
  },
  headerTitleStyles: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
    alignSelf: 'center',
    flexGrow: 1,
    textAlign: 'center',
    marginRight: 27,
  },
});
