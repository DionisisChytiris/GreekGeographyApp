import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import QuizScreen from './screens/QuizScreen';
import Cities from './screens/Cities';
import Counties from './screens/Counties'
import ResultsScreen from './screens/ResultsScreen';
import TestQuiz from './screens/TestQuiz'

const Stack = createNativeStackNavigator();

const StackNavigator =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Cities} options={{headerShown: false, orientation: 'portrait'}}/> 
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>  */}
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Cities" component={Cities} options={{headerShown: false}}/>
        <Stack.Screen name="Counties" component={Counties} />
        <Stack.Screen name="TestQuiz" component={TestQuiz} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;