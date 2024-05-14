import {StyleSheet} from 'react-native';

export const signUpStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 170,
  },
  title: {
    fontSize: 30,
    fontFamily: 'trebuc',
    lineHeight: 56,
    color: '#000000',
    marginTop: -20,
  },
  usernameContainer: {
    width: '100%',
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 1,
    padding: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 10,
  },
  usernameError: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    width: '100%',
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: -10,
  },
});
