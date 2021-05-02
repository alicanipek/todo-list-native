import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import AddTodo from './components/views/AddTodo';
import Home from './components/views/Home';
import Text from './components/styled/Text';
import Button from './components/styled/Button';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
  );
}
function ModalScreen() {
  let nav = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => nav.goBack()}>
        <Text>Dismiss</Text>
      </Button>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="MyModal"
          component={AddTodo}
          options={{
            headerStyle: {
              shadowColor: 'transparent',
            },
            headerTitle: '',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
