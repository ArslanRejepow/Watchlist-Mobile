import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/loginStyle';
import React from 'react';
import {Image} from 'react-native';
const image = require('../images/homeScreen.png');

export default function ForgotPasswordScreen({navigation}) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>Paroly täzele</Text>
      {/* TODO: find motivation sentence to write here */}
      {/* <Text style={styles.privacyText}>
          Siz içeri girmek bilen biziň{' '}
          <Text style={{color: 'blue'}}>Ulanyş Düzgünlerimizi</Text> kabul
          edýärsiniz
        </Text> */}
      <View style={styles.loginForm}>
        <View style={styles.loginUsernameContainer}>
          <IconFA name="user-o" size={25} />
          <TextInput
            style={styles.loginUsernameTextInput}
            placeholder="Email ýa-da telefon belgi"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Kod ugrat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.signUpButtonText}>Yza</Text>
      </TouchableOpacity>
    </View>
  );
}
