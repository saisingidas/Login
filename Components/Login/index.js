import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigation.navigate('Reset');
  };

  const handleLogin = () => {
    navigation.navigate('Profile');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={[styles.input, styles.textInput]}
        keyboardType="email-address"
        autoCapitalize="none"
        theme={{ colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry={!showPassword}
        style={styles.input}
        theme={{ colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' } }}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={togglePasswordVisibility}
            color={showPassword ? "#0055ff" : "black"}
          />
        }
      />
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <Button
        mode="contained"
        onPress={handleLogin}
        contentStyle={styles.buttonContent}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Login
      </Button>
      <TouchableOpacity onPress={handleSignUp} style={styles.signup}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Text style={styles.signupText}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'extraBold',
  },
  input: {
    marginBottom: 15,
    width: '100%',
  },
  textInput: {
    fontFamily: 'regular',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#0055ff',
    fontFamily: 'regular',
  },
  button: {
    width: 200,
    borderRadius: 30,
    backgroundColor: '#ccddff',
    elevation: 2,
    marginTop: 10,
  },
  buttonLabel: {
    fontSize: 16,
    fontFamily: 'semiBold',
    color: '#0055ff',
  },
  buttonContent: {
    height: 50,
  },
  signup: {
    marginTop: 20,
    flexDirection: 'row',
  },
  signupText: {
    fontSize: 14,
    color: '#0055ff',
    fontFamily: 'regular',
  },
  text: {
    fontSize: 14,
    fontFamily: 'regular',
  },
});
