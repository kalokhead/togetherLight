import {Alert} from 'react-native';

// genrate OTP
export const getData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    if (res.status == 200) {
      let data = await res.json();
      return data;
    } else {
      throw new Error('Unable to fetch data please try again!');
    }
  } catch (err) {
    Alert.alert(err.toString());
    console.log(err);
  }
};
