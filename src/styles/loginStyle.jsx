import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
  },
  title: {
    fontSize: 30,
    fontFamily: 'trebuc',
    lineHeight: 56,
    color: '#000000',
  },
  privacyText: {
    fontSize: 15,
    fontFamily: 'trebuc',
    lineHeight: 25,
    color: '#6B5E5E',
    width: '75%',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  navigatorButton: {margin: 20},
  activeMenu: {
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 1,
    color: '#036BB9',
    paddingBottom: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#A6A6A6',
  },
  loginForm: {
    width: '70%',
  },
  loginUsernameContainer: {
    width: '100%',
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 1,
    padding: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 20,
  },
  loginUsernameTextInput: {
    width: '90%',
    marginLeft: 5,
    fontSize: 17,
    height: 30,
    padding: 0,
    fontFamily: 'trebuc',
  },
  loginButton: {
    width: '70%',
    marginTop: 40,
    backgroundColor: '#0386D0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'trebuc',
  },

  line: {
    height: 2,
    width: '20%',
    backgroundColor: '#A6A6A6',
  },

  lineContainer: {
    marginTop: 80,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpButton: {
    width: '70%',
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: '#0386D0',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  signUpButtonText: {
    color: '#0386D0',
    fontSize: 20,
    fontFamily: 'trebuc',
  },
  forgotPasswordContainer: {
    width: '100%',
    justifyContent: 'right',
    alignItems: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    width: '70%',
    textAlign: 'right',
    color: '#0386D0',
    fontFamily: 'trebuc',
  },
});
