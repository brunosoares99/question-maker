import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync().then(() => console.log('SplashScreen.preventAutoHideAsync() succeeded'));

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default registerRootComponent(App);