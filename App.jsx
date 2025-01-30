import {View, Text, Button} from 'react-native';
import React from 'react';
import FunctionalBasedCom from './src/component/FunctionalBasedCom';
import Jsx from './src/component/Jsx';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>
        Namste , Ravi Sahani You are learning New Technology like React Native.
      </Text>
      <Text style={{fontSize: 30}}>
        Namste , Ravi Sahani You are learning New Technology like React Native.
      </Text>
      <FunctionalBasedCom />
      <FunctionalBasedCom /> resuablity of ex.
      <FunctionalBasedCom /> // reuseblity of ex. // JSX
      <Jsx />
      <Button title="press" />
    </View>
  );
};

export default App;
