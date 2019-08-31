import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../Redux/Actions/ApiActions';

function mapStateToProps(state) {
  return {
    apiData: state.apiData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: kind => dispatch(fetchData(kind)),
  };
}

class Screen2 extends Component {
  render() {
    let apiData = this.props.apiData.data;
    const data = apiData.length !== 0 ? apiData : 'Waiting for data';
    return (
      <View style={styles.content}>
        <Text style={styles.headerText}>
          Screen #2: API With Redux saga example
        </Text>
        <Button
          title={'Fetch data'}
          onPress={() => this.props.fetchData('random')}
        />
        <View style={styles.dataHolder}>
          <Text style={styles.dataText}>{JSON.stringify(data)}</Text>
        </View>
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
  dataHolder: {
    backgroundColor: '#d3d3d3',
  },
  dataText: {
    textAlign: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen2);
