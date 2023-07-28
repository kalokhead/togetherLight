import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation, route}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const checkAndValidate = () => {
    // validate the info and login
    try {
      if (userName == 'TogetherLight' && password == 'TogetherLight@123') {
        Alert.alert('Login successful.');
        Alert.alert('Login successful.', 'Welcome', [
          {
            text: 'Ok',
            onPress: () => {
              navigation.navigate('ListScreen');
            },
            style: 'cancel',
          },
        ]);
      } else {
        Alert.alert('Login failed.');
      }
    } catch (error) {}
  };

  return (
    <View style={styles.main}>
      {/* input View */}
      <View style={styles.inputView}>
        <TextInput
          placeholder="Please Enter Valid user ID"
          underlineColorAndroid="transparent"
          returnKeyType="done"
          underlineColor="transparent"
          keyboardType={'default'}
          label={'User Name'}
          style={styles.inputTextStyle}
          onChangeText={val => {
            setUserName(val);
          }}
        />

        <TextInput
          placeholder="Password"
          underlineColorAndroid="transparent"
          returnKeyType="done"
          underlineColor="transparent"
          label={'Password'}
          secureTextEntry={true}
          style={styles.inputTextStyle}
          onChangeText={val => {
            setPassword(val);
          }}
        />

        <Text>
          {
            'NOTE:- Please add below info for the Login\n userName :- TogetherLight \n password :- TogetherLight@123'
          }
        </Text>
      </View>
      {/* Button View */}
      <View style={styles.buttonView}>
        <Button
          style={styles.buttonStyle}
          buttonColor="#FFBB00"
          onPress={() => {
            checkAndValidate();
          }}>
          {'Login'}
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  inputView: {
    flex: 0.9,
    margin: 8,
    justifyContent: 'space-around',
  },
  buttonView: {
    flex: 0.1,
    margin: 8,
    justifyContent: 'center',
  },
  inputTextStyle: {
    marginVertical: 8,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 4,
  },
  buttonStyle: {
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 4,
  },
});

export default Login;
