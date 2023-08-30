import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
}


export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value);
    }
  } catch(e) {
    // error reading value
  }
}

export const RegisterURL = 'http://10.255.5.237/himebot/api/register';
export const LoginURL = 'http://10.255.5.237/himebot/api/login';
export const KonselingRemajaURL = 'https://besti.okeadmin.com/api/konselingremaja';
export const KonselingRemajaURLLOGIN = 'https://besti.okeadmin.com/api/loginkonseling';
export const SliderURL = 'https://besti.okeadmin.com/api/slider';
export  const MYAPP = 'BESTI'; 