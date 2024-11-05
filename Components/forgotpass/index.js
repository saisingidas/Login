import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleReset = () => {
    console.log('Please check your email!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        theme={{
          colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' },
        }}
      />
      <Button
        mode="contained"
        onPress={handleReset}
        contentStyle={styles.buttonContent}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Reset Password
      </Button>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backToLoginButton}>
        <Text style={styles.backToLoginText}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'extraBold',
  },
  input: {
    marginBottom: 15,
    width: '100%',
  },
  button: {
    width: 200,
    borderRadius: 30,
    backgroundColor: '#ccddff',
    elevation: 2,
    marginTop: 10,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: 'semiBold',
    color: '#0055ff',
  },
  buttonContent: {
    height: 50,
  },
  backToLoginButton: {
    marginTop: 20,
  },
  backToLoginText: {
    fontSize: 16,
    color: '#0055ff',
    fontFamily: 'regular',
  },
});
