import { View, ActivityIndicator } from "react-native";

const Loading: React.FC = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator size="large" color="#999" />
    </View>
  );
} 

export default Loading;