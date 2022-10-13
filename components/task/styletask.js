import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  listNumbers: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#53d6f2',
    borderRadius: 15,
    flex: 1,
    fontSize: 18,
    color: '#fff',
  },
  even:{
 backgroundColor: '#55f253',
  },
  odd:{
  backgroundColor:'#53d6f2' ,
  },
  listView: {
    backgroundColor: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  contain: {
    flex: 4,
    marginHorizontal: 5,
    width: '80%',
    fontSize: 16,
  },
});
export default styles;
