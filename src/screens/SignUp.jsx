import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/loginStyle';
import {signUpStyles} from '../styles/signUpStyle';
import React from 'react';
import {Image} from 'react-native';
const image = require('../images/signup.png');

import {post} from '../utils/api';

export default function SignUpScreen({navigation}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState({password: ''});

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleChangeForm = (value, key) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const submitForm = () => {
    navigation.navigate('Verify');
    // Keyboard.dismiss();
    // post(
    //   'auth/sign-up',
    //   form,
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err.response.data);
    //     setErrors(err.response.data);
    //   },
    // );
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image source={image} style={signUpStyles.image} />

        <Text style={signUpStyles.title}>Agza Bol</Text>
        <Text style={styles.privacyText}>
          Siz agza bolmak bilen biziň{' '}
          <Text style={{color: '#0386D0'}}>Ulanyş Düzgünlerimizi</Text> kabul
          edýärsiniz
        </Text>
        <View style={styles.loginForm}>
          <View
            style={[
              signUpStyles.usernameContainer,
              errors.username && signUpStyles.usernameError,
            ]}>
            <IconFA
              name="user-o"
              size={25}
              color={errors.username ? 'red' : 'grey'}
            />
            <TextInput
              style={[styles.loginUsernameTextInput, {width: '80%'}]}
              placeholder="Ulanyjy ady"
              name="username"
              onChangeText={e => handleChangeForm(e, 'username')}
            />
          </View>
          {errors.username && (
            <Text style={signUpStyles.errorText}>*{errors.username}</Text>
          )}
          <View
            style={[
              signUpStyles.usernameContainer,
              errors.email && signUpStyles.usernameError,
            ]}>
            <IconMC
              name="email-outline"
              size={25}
              color={errors.email ? 'red' : 'grey'}
            />
            <TextInput
              style={[styles.loginUsernameTextInput, {width: '90%'}]}
              placeholder="Email ýa-da telefon belgisi"
              name="email"
              onChangeText={e => handleChangeForm(e, 'email')}
            />
          </View>
          {errors.email && (
            <Text style={signUpStyles.errorText}>*{errors.email}</Text>
          )}
          <View
            style={[
              signUpStyles.usernameContainer,
              errors.password && signUpStyles.usernameError,
            ]}>
            <IconF
              name="lock"
              size={25}
              color={errors.password ? 'red' : 'grey'}
            />
            <TextInput
              style={[styles.loginUsernameTextInput, {width: '80%'}]}
              placeholder="Açar sözi"
              secureTextEntry={!showPassword}
              name="password"
              onChangeText={e => handleChangeForm(e, 'password')}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(prev => !prev);
              }}>
              <IconMC name={showPassword ? 'eye-off' : 'eye'} size={23} />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={signUpStyles.errorText}>*{errors.password}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={submitForm}>
          <Text style={styles.loginButtonText}>Agza bol</Text>
        </TouchableOpacity>

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={{fontFamily: 'trebuc'}}> Eýýäm bizden birimi? </Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.signUpButtonText}>Içeri gir</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
