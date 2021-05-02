import {useNavigation} from '@react-navigation/core';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Item from '../../models/Item';
import Button from '../styled/Button';
import List from '../styled/List';
import Text from '../styled/Text';
import TodoItem from '../TodoItem';

type HomeStackParamList = {
  Home: {
    TodoItem: Item;
  };
};

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;

export default function Home() {
  const route = useRoute<HomeScreenRouteProp>();

  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState<Item[]>([]);
  const todoList = React.useRef<FlatList>(null);
  const navigation = useNavigation();
  React.useEffect(() => {
    if (route.params?.TodoItem) {
      console.log(route.params?.TodoItem);
      let t = [...data, route.params.TodoItem];
      setData(t);
    }
  }, [route.params?.TodoItem]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Today</Text>
      <List
        data={data}
        ref={todoList}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>Your list is empty</Text>
            </View>
          );
        }}
        renderItem={({item}) => (
          <TodoItem
            item={item as Item}
            onPress={() => {
              setRefresh(!refresh);
              (item as Item).isDone = !(item as Item).isDone;
            }}></TodoItem>
        )}
        onContentSizeChange={() => {
          if (todoList && todoList.current) {
            todoList.current.scrollToEnd();
          }
        }}
        keyExtractor={item => (item as Item).id}
        extraData={refresh}></List>

      <Button
        onPress={() => navigation.navigate('MyModal')}
        color="#841584"
        bg="white"
        position="absolute"
        size={64}
        bottom="44px"
        right="16px"
        borderRadius={32}
        justifyContent="center"
        alignItems="center">
        <Text fontSize={23} color="#006CFF">
          +
        </Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 5,
    borderWidth: 1,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 41,
    color: '#252A31',
    paddingLeft: 60,
  },
});
