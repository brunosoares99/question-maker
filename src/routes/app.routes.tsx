import { createStackNavigator } from '@react-navigation/stack';
import Initial from '../pages/Initial';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen options={{ headerShown: false }} name="Initial" component={Initial} />
    <AppStack.Screen name="SignUp" component={SignUp} />
    <AppStack.Screen name="SignIn" component={SignIn} />
  </AppStack.Navigator>
);

export default AppRoutes;
