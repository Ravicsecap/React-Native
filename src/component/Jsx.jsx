import {View, Text} from 'react-native';
import React from 'react';

const Jsx = () => {
  let name = 'Ravi Sahani'; // Statement simmilarly loop  , decliare any varible if condition etc , function (simple statment voh hai jo value retrun nhi krta hai.)

  const greetWelcome = () => {
    return 'Hello I am Ravi Sahani ';
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>What is a JSX</Text>
      <Text style={{fontSize: 20}}>
        This is a JavaScript syntax Extension, only used for expression not
        statement
      </Text>

      <Text>{name}</Text>
      <Text>{5 + 89 + 69}</Text>
      <Text>{greetWelcome()}</Text>
    </View>
  );
};

export default Jsx;
