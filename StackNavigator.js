import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, QuizScreen, Cities, Counties, LoseScreen} from './screens'
import {Nomoi1, Nomoi2, Nomoi3, Nomoi4, Nomoi5, Nomoi6} from './screens/Quizzes'
import {NomoiResult1, NomoiResult2, NomoiResult3, NomoiResult4, NomoiResult5, NomoiResult6, ResultsScreen} from './screens/Results'
import NomoiTest1 from './screens/Quizzes/NomoiTest1';

const Stack = createNativeStackNavigator();

const StackNavigator =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NomoiTest1} options={{headerShown: false, orientation: 'portrait'}}/> 
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>     */}
        <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cities" component={Cities} options={{headerShown: false}}/>
        <Stack.Screen name="Counties" component={Counties} options={{headerShown: false}}/>
        <Stack.Screen name="LoseScreen" component={LoseScreen} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi1" component={Nomoi1} options={{headerShown: false}}/>
        <Stack.Screen name="Nomoi2" component={Nomoi2} options={{headerShown: false}}/>
        <Stack.Screen name="Nomoi3" component={Nomoi3} options={{headerShown: false}}/>
        <Stack.Screen name="Nomoi4" component={Nomoi4} options={{headerShown: false}}/>
        <Stack.Screen name="Nomoi5" component={Nomoi5} options={{headerShown: false}}/>
        <Stack.Screen name="Nomoi6" component={Nomoi6} options={{headerShown: false}}/>
        <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult1" component={NomoiResult1} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult2" component={NomoiResult2} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult3" component={NomoiResult3} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult4" component={NomoiResult4} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult5" component={NomoiResult5} options={{headerShown: false}}/>
        <Stack.Screen name="NomoiResult6" component={NomoiResult6} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;