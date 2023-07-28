import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Spinner} from '../common/ThemedComponents';
import {getData} from '../services/getData';

//Dimentions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListScreen = ({navigation, route}) => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false); // for swipeDown and refresh controll
  useEffect(() => {
    // calling API as screen loads
    getUserData();
  }, []);
  const getUserData = async () => {
    // API call
    let data = await getData();
    setUserList(data);
    setLoading(false); // disable the spinner
  };
  const renderItem = ({item, index}) => {
    // list view item
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UserInfo', {userData: item});
        }}>
        <View style={styles.tidleView}>
          {/* title view */}
          <View style={styles.titleView}>
            <Text style={styles.titleStyle} minimumFontScale={0.1}>
              {item.title}
            </Text>
          </View>
          {/* desc view */}

          <View style={styles.descView}>
            <Text style={styles.bodyTextstyle}>{item.body}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      {/* input View */}
      <Spinner loading={loading}></Spinner>
      <View style={styles.listView}>
        <FlatList
          data={userList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          maxToRenderPerBatch={100}
          updateCellsBatchingPeriod={1000}
          onRefresh={() => {
            setIsRefreshing(true);
            getUserData();
            setIsRefreshing(false);
          }}
          refreshing={isRefreshing}
        />
      </View>
      {/* Button View */}
      <View style={styles.buttonView}>
        <Button
          style={styles.buttonStyle}
          buttonColor="#FFBB00"
          onPress={() => {
            setLoading(true);
            getUserData();
          }}>
          {'Refresh'}
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  listView: {
    flex: 0.9,
    margin: 8,
    borderWidth: 1,
  },
  buttonView: {
    flex: 0.1,
    margin: 8,
    justifyContent: 'center',
  },
  buttonStyle: {
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 4,
  },
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
    lineHeight: 20,
  },
  bodyTextstyle: {
    fontSize: 14,
    alignSelf: 'center',
  },
  titleView: {
    flex: 0.2,
    justifyContent: 'center',
  },
  descView: {
    flex: 0.8,
    justifyContent: 'center',
  },
  tidleView: {
    height: windowHeight / 4,
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 4,
    justifyContent: 'space-around',
  },
});

export default ListScreen;
