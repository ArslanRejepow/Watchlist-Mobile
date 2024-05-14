import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {styles} from '../styles/verifyStyle.jsx';
import React, {useEffect} from 'react';
import {useRef, useState} from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome6.js';
const image = require('../images/homeScreen.png');

export default function Verify({navigation}) {
  const [remainingSeconds, setRemainingSeconds] = useState(60);
  const [loading, setLoading] = useState(false);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setRemainingSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timer.current);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);

  const [code, setCode] = useState('');

  const handleKeyPress = (event, index) => {
    // if (/^\d$/.test(event.nativeEvent.key)) {
    //   const newCode =
    //     code.substring(0, index) +
    //     event.nativeEvent.key +
    //     code.substring(index + 1);
    //   setCode(newCode);
    // }

    if (event.nativeEvent.key === 'Backspace' && index >= 0 && !code[index]) {
      const newCode = code.substring(0, index - 1) + code.substring(index);
      setCode(newCode);
      console.log(index);
      switch (index) {
        case 0:
          firstInputRef.current.focus();
          break;
        case 1:
          firstInputRef.current.focus();
          break;
        case 2:
          secondInputRef.current.focus();
          break;
        case 3:
          thirdInputRef.current.focus();
          break;
        default:
          break;
      }
    } else if (
      /^\d$/.test(event.nativeEvent.key) &&
      index < 4 &&
      !code[index]
    ) {
      const newCode =
        code.substring(0, index) +
        event.nativeEvent.key +
        code.substring(index + 1);
      setCode(newCode);

      switch (index) {
        case 0:
          secondInputRef.current.focus();
          break;
        case 1:
          thirdInputRef.current.focus();
          break;
        case 2:
          fourthInputRef.current.focus();
          break;
        case 3:
          fourthInputRef.current.focus();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (code.length == 4) {
      setLoading(true);
      Keyboard.dismiss();
      clearInterval(timer.current);
    }
  }, [code]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    }
  }, [loading]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <IconFA name="arrow-left-long" color={'white'} size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>Email-iňizi dogrulaň</Text>
      <Text style={styles.header}>
        Email-e ugradylan 4 belgili gizlin sany giriziň
      </Text>
      <View style={styles.codeContainer}>
        <TextInput
          ref={firstInputRef}
          style={[styles.codeInput, code.length >= 1 && styles.codeInputFilled]}
          keyboardType="numeric"
          value={code[0]}
          maxLength={1}
          autoFocus={true}
          onKeyPress={event => handleKeyPress(event, 0)}
        />
        <TextInput
          ref={secondInputRef}
          style={[styles.codeInput, code.length >= 2 && styles.codeInputFilled]}
          keyboardType="numeric"
          maxLength={1}
          value={code[1]}
          onKeyPress={event => handleKeyPress(event, 1)}
        />
        <TextInput
          ref={thirdInputRef}
          style={[styles.codeInput, code.length >= 3 && styles.codeInputFilled]}
          keyboardType="numeric"
          maxLength={1}
          value={code[2]}
          onKeyPress={event => handleKeyPress(event, 2)}
        />
        <TextInput
          ref={fourthInputRef}
          style={[styles.codeInput, code.length >= 4 && styles.codeInputFilled]}
          keyboardType="numeric"
          maxLength={1}
          value={code[3]}
          onKeyPress={event => handleKeyPress(event, 3)}
        />
      </View>
      <Text style={styles.header}>
        Kod gelmedi ({minutes}:{seconds})
      </Text>
      {loading && (
        <View style={styles.darkScreen}>
          <ActivityIndicator size="large" color="#F6851B" />
        </View>
      )}
    </View>
  );
}
