import { createStackNavigator } from '@react-navigation/stack';
import Courses from "../pages/Courses";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#415DED',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerTitleAlign: 'center',
  }}>
    <AuthStack.Screen options={{ title: 'Cursos' }} name="Courses" component={Courses} />
  </AuthStack.Navigator>
);

export default AuthRoutes;