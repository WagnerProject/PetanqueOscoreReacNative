import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Alert } from 'react-native';

const CreateAccount = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [userPassword, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!userPassword) {
      Alert.alert(
        'Attention',
        'Vous devez entrer un mot de passe',
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
      return;
    }
  
    try {
      console.log('les variables contiennes les valeurs suivantes:', {username, userPassword });
  
      const response = await axios.post('https://bastienforestier.fr/paul/actions/CreatorAccount.php', {
        username,
        userPassword
      });
  
      console.log('réponse depuis le serveur:', response.data);
  
      if (response.data.success) {
        Alert.alert(
          'Félicitation !',
          'Votre compte à été créer ! vous allez être redirigez vers l ecran de connexion',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('connexion'),
            },
          ],
          { cancelable: false },
        );
      } else {
        Alert.alert(
          'Félicitation !',
          'Votre compte à été créer ! vous allez être redirigez vers l ecran de connexion',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('connexion'),
            },
          ],
          { cancelable: false },
        );
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Erreur',
        'Une erreur s\'est produite Vous avez certainement prit un pseudo existant ... !',
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ton Pseudo !"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={text => setPassword(text)}
        value={userPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Crer un compte PetanqueOscore !</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  button: {
    width: 200,
    height: 44,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default CreateAccount;
