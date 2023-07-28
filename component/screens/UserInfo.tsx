import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/Ionicons';

const UserInfo = ({navigation, route}) => {
  const {body, id, title, userId} = route.params.userData;
  return (
    <View style={styles.main}>
      <View style={styles.headingView}>
        <View style={{flex: 0.1}}>
          {/* Back button */}
          <MCIcon
            name="arrow-back"
            size={30}
            color={'black'}
            onPress={() => {
              navigation.pop();
            }}
          />
        </View>
        <View style={{flex: 0.9}}>
          <Text style={styles.headingText}>{'User Information'}</Text>
        </View>
      </View>
      {/* Display info */}
      <View style={styles.infoView}>
        <Text style={styles.infoText}>{`ID :  \t ${id}`}</Text>
        <Text style={styles.infoText}>{`User ID: \t ${userId}`}</Text>
        <Text style={styles.infoText}>{`Title: \t ${title}`}</Text>
        <Text style={styles.infoText}>{`Description:\t ${body}`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 8,
  },
  headingView: {
    flex: 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
  },
  infoView: {
    flex: 0.9,
    justifyContent: 'space-around',
    borderWidth: 1,
  },
  headingText: {
    fontSize: 24,
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 14,
    marginLeft: 8,
    fontWeight: 'bold',
  },
});

export default UserInfo;
