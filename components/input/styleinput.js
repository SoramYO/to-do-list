import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    width: 250,
    borderRadius: 19,
    borderColor: 'blue',
  },
  addButton: {
    color: 'white',
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
export default styles;
