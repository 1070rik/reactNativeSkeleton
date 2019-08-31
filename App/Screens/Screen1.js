import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {decrementCount, incrementCount} from '../Redux/Actions/CounterActions';

function mapStateToProps(state) {
  return {
    counterData: state.counterData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount()),
  };
}

class Screen1 extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.headerText}>Screen #1: Redux saga example</Text>
        <View style={styles.flexContainer}>
          <Button title={'-'} onPress={() => this.props.decrementCount()} />
          <Text>{this.props.counterData.counter}</Text>
          <Button title={'+'} onPress={() => this.props.incrementCount()} />
        </View>
        <Button title={'Log'} onPress={() => console.tron.log('Hi!')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen1);
