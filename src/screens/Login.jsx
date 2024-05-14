import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/loginStyle';
import React from 'react';
import {Image} from 'react-native';
const image = require('../images/homeScreen.png');

export default function LoginScreen({navigation}) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>Içeri gir</Text>
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
            placeholder="Ulanyjy ady ýa-da email"
          />
        </View>
        <View style={styles.loginUsernameContainer}>
          <IconF name="lock" size={25} />
          <TextInput
            style={[styles.loginUsernameTextInput, {width: '80%'}]}
            placeholder="Açar sözi"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => {
              setShowPassword(prev => !prev);
            }}>
            <IconMC name={showPassword ? 'eye-off' : 'eye'} size={23} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.forgotPasswordText}>
            Açar sözümi ýadymdan çykardym
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Içeri gir</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={{fontFamily: 'trebuc'}}> Heniz hem bize goşulmadyňmy? </Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text style={styles.signUpButtonText}>Agza bol</Text>
      </TouchableOpacity>
    </View>
  );
}
