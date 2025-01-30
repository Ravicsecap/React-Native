import {View, Text, Button} from 'react-native';
import React from 'react';

const ButtonComponent = () => {
  let name = 'lavi';
  const getName = () => {
    name = 'ravi';
    console.warn('Name', name);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>ButtonComponent</Text>
      <Button title="press" onPress={() => getName('lavi')} />
    </View>
  );
};

export default ButtonComponent;
