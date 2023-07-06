import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  faAngleLeft,
  faBars,
  faCheckCircle,
  faHome,
  faShoppingCart,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import {library} from '@fortawesome/fontawesome-svg-core';
import list from './src/screens/list';

library.add(
  faAngleLeft,
  faBars,
  faHome,
  faShoppingCart,
  faCheckCircle,
  faTrash,
);

const Stack = createNativeStackNavigator();

function App() {
  const screensRender = () => {
    return list.map(screen => {
      return (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{headerShown: false}}
        />
      );
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{screensRender()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
