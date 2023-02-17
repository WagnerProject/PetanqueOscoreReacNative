import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from '@rneui/base';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../../../store/actions/auth';
import useCredentials from '../hooks/useCredentials';
import KeyboardAvoidingComponent from '../../../components/KeyboardAvoidingComponent';

const styles = {
  container: { flex: 1, justifyContent: 'center', padding: 10 },
};

function LoginForm({ navigation, loading, error, login }) {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleLogin() {
    console.log([username, userPassword]); // Vérifie les valeurs des clés "username" et "userPassword"
    axios
      .post('https://bastienforestier.fr/paul/actions/connectUser.php', {
        username,
        userPassword,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === 'Connexion réussie.') {
          login(username, userPassword);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  function handleSubscription() {
    navigation.navigate('subscription');
  }

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <Input
          placeholder="Identifiant"
          leftIcon={{ name: 'account-circle' }}
          onChangeText={setUsername}
          errorMessage={error}
          disabled={loading}
          value={username}
        />
        <Input
          placeholder="Mot de passe"
          leftIcon={{ name: 'vpn-key' }}
          onChangeText={setUserPassword}
          disabled={loading}
          secureTextEntry
          value={userPassword}
        />
        <Button
          title="Connexion"
          onPress={handleLogin}
          loading={loading}
          disabled={loading}
        />
        <Button
          title="S'inscrire"
          type="outline"
          containerStyle={{ marginTop: 10 }}
          onPress={handleSubscription}
          disabled={loading}
        />
      </View>
    </KeyboardAvoidingComponent>
  );
}

export default connect(null, { login })(LoginForm);
