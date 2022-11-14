import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';

const Initial: React.FC<any> = ({ navigation }) => {
  const handleNavigate = (route: string) => {
    navigation.navigate(route);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerText} >
        <Text style={styles.subTitleLogo}>Bem-vindo ao 
        </Text>
        <Text style={styles.titleLogo}>QuestionMaker</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=> handleNavigate('SignIn')} style={styles.touchable}>
          <Text style={styles.innerTouchable}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleNavigate('SignUp')} style={styles.touchable}>
          <Text style={styles.innerTouchable}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 0,
    paddingHorizontal: 20,
    backgroundColor: '#415DED',
  },
  containerText: {

  },
  titleLogo: {
    fontWeight: "900",
    color: '#F6E2E2',
    fontSize: 40,
  },
  subTitleLogo: {
    fontWeight: "600",
    color: '#F6E2E2',
    fontSize: 32,
  },
  touchable: {
    backgroundColor: '#5640E4',
    borderColor: '#fff',
    borderWidth: 3,
    borderStyle: 'solid',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginVertical: 10
  },
  innerTouchable: {
    color: '#fff',
    fontFamily: 'sans-serif',
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
  }
  
})


export default Initial;