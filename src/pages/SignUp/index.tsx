import React, { useState, useContext } from 'react';
import { Button, TextInput } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { signUp } from '../../services/signup';
import {StyledContainer, StyledInput} from './styles';

const SignUp: React.FC<any> = ({navigation}) => {
  console.log(navigation)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLoading } = useAuth();


  async function handleSignUp() {
    setLoading(true);
    try {
      await signUp({ name, email, password });
      navigation.navigate('SignIn');
      setLoading(false);
   } catch(error) {
      setLoading(false);
      console.log(error)
   }
  }

  return (
    <StyledContainer>
      <StyledInput 
        placeholder='Nome'
        onChangeText={textName => setName(textName)}
        defaultValue={name}
      />
      <StyledInput 
        placeholder="E-mail"
        onChangeText={textEmail => setEmail(textEmail)}
        defaultValue={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <StyledInput 
      placeholder='Senha' 
      secureTextEntry={true}  
      onChangeText={textPassword => setPassword(textPassword)}
      defaultValue={password}
      />
      <Button title="Sign up" onPress={() => handleSignUp()}/>
    </StyledContainer>
  );
};

export default SignUp;