import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import QuizScreen from './screens/QuizScreen';
import Cities from './screens/Cities';
import Counties from './screens/Counties'
import ResultsScreen from './screens/Results/ResultsScreen';
import Nomoi1 from './screens/Quizzes/Nomoi1'
import Nomoi2 from './screens/Quizzes/Nomoi2'
import TestResultsScreen from './screens/Results/NomoiResult';

const Stack = createNativeStackNavigator();

const StackNavigator =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Nomoi1} options={{headerShown: false, orientation: 'portrait'}}/> 
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>     */}
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Cities" component={Cities} options={{headerShown: false}}/>
        <Stack.Screen name="Counties" component={Counties} />
        <Stack.Screen name="Nomoi1" component={Nomoi1} />
        <Stack.Screen name="Nomoi2" component={Nomoi2} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="TestResults" component={TestResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;