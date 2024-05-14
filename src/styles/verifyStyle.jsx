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
  header: {
    fontSize: 15,
    fontFamily: 'trebuc',
    lineHeight: 25,
    color: '#6B5E5E',
    width: '75%',
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  codeInput: {
    width: 45,
    height: 55,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    color: '#3649f5',
    fontSize: 26,
    textAlign: 'center',
  },
  codeInputFilled: {
    borderColor: '#3649f5',
  },
  backArrow: {
    position: 'absolute',
    top: 40,
    left: 40,
  },
  darkScreen: {
    width: '100%',
    height: '200%',
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
