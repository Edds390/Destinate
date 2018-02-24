import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import NodeContainer from '../NodeContainer/NodeContainer';

export default class GoalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeArray: [1, 2],
    };
  }

  render() {
    const { nodeArray } = this.state;
    return (
      <View>
        {nodeArray.forEach(() => {
          <NodeContainer />
        })}
      </View>
    );
  }
}
