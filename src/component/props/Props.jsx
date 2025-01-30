import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Child from './Child';

const Props = () => {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);

  const countIncrement = () => {
    setCount(count + 1);
  };
  const multitIncrement = () => {
    setMulti(multi * 10);
  };

  return (
    <View>
      <Text style={{fontSize: 20}}>
        Props using for parent to child data send.
      </Text>

      <Text> Count : {count}</Text>
      <Button title="Count" onPress={countIncrement} />

      <Text> Multiple : {multi}</Text>
      <Button title="Multiple" onPress={multitIncrement} />

      <Child count={count} multi={multi} />
    </View>
  );
};

export default Props;
