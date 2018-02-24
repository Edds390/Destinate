import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoalPage from './src/Components/GoalPage/GoalPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B04632',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <GoalPage />
  </View>
);

export default App;
