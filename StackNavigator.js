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
import NomoiResult1 from './screens/Results/NomoiResult1';
import NomoiResult2 from './screens/Results/NomoiResult2';
import LoseScreen from './screens/LoseScreen'

const Stack = createNativeStackNavigator();

const StackNavigator =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Nomoi2} options={{headerShown: false, orientation: 'portrait'}}/> 
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>     */}
        <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cities" component={Cities} options={{headerShown: false}}/>
        <Stack.Screen name="Counties" component={Counties} options={{headerShown: false}}/>
        <Stack.Screen name="LoseScreen" component={LoseScreen} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi1" component={Nomoi1} options={{headerShown: false}}/>
        <Stack.Screen name="Nomoi2" component={Nomoi2} options={{headerShown: false}}/>
        <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult1" component={NomoiResult1} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult2" component={NomoiResult2} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;