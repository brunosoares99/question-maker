import { useAuth } from "../contexts/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import * as SplashScreen from 'expo-splash-screen';
import Loading from "../components/Loading";


const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  if(loading) {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    hideSplashScreen();
    return <Loading/>
  };
  return signed ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;