import {View, Text} from 'react-native';
import React from 'react';
import Props from './Props';

const Child = props => {
  return (
    <View>
      <Text>Props data show in child :{props.count}</Text>
      <Text>Props data show in child :{props.multi}</Text>
      <Text>Child , parent data show in child component</Text>
    </View>
  );
};

export default Child;
