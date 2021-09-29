import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feed from './components/Feed/Feed';
import Calendar from './components/Calendar/Calendar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import ComposeListing from './components/ComposeListing/ComposeListing';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ authenticated ? "Navbar" : "Login" }>
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="ComposeListing" component={ComposeListing} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
