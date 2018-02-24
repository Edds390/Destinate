import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Open up App.js :)</Text>
        <Text>Changes you make will automatically reload.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B04632',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
