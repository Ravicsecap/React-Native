import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('lavi');

  const nameChangeHandler = () => {
    setName('ravi');
  };
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center'}}>UseStateHook</Text>
      <Text style={{fontSize: 30}}>Name:{name}</Text>
      {/* <Button title="Change Name" onPress={() => setName('ravi')} /> */}
      <Button title="Change Name" onPress={nameChangeHandler} />
    </View>
  );
};

export default UseStateHook;
