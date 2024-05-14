import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import ForgotPasswordScreen from './screens/forgotPassword';
import VerifyScreen from './screens/Verify';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false, animation: 'none'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
