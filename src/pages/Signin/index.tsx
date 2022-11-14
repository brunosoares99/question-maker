import React, { useState, useContext } from 'react';
import { Button, TextInput } from 'react-native';
import { useAuth } from '../../contexts/auth';
import {StyledContainer, StyledInput} from './styles';

const SignIn: React.FC = () => {
  const { setLoading, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    setLoading(true);
    try {
      console.log('vai chamar o sign in')
      await signIn({ email, password });
      console.log('deu')
      setLoading(false);
   } catch(error) {
      setLoading(false);
      console.log(error)
   }
  }

  return (
    <StyledContainer>
      <StyledInput 
        placeholder='E-mail'
        onChangeText={textEmail => setEmail(textEmail)}
        defaultValue={email}
        autoCapitalize='none'
        keyboardType="email-address"
      />
      <StyledInput 
      placeholder='Senha' 
      secureTextEntry={true}  
      onChangeText={textPassword => setPassword(textPassword)}
      defaultValue={password}
      />
      <Button title="Sign in" onPress={() => handleSignIn()}/>
    </StyledContainer>
  );
};

export default SignIn;