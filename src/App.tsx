import React, {useState} from 'react';
import uuid from 'react-native-uuid';

import {
  FlatList,
  GestureResponderEvent,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Box from './components/Box';
import Button from './components/Button';
import TodoNotDone from './components/icons/TodoNotDone';
import Item from './models/Item';
import TodoItem from './components/TodoItem';
import List from './components/List';

// interface ItemProps {
//   item: Item;
//   onPress: ((event: GestureResponderEvent) => void) | undefined;
//   backgroundColor: string;
//   textColor: string;
// }

// const Item = (props: ItemProps) => (
//   <TouchableOpacity
//     onPress={props.onPress}
//     style={{...styles.item, backgroundColor: props.backgroundColor}}>
//     <Text style={{...styles.title, color: props.textColor}}>
//       {props.item.title}
//     </Text>
//   </TouchableOpacity>
// );

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState<Item[]>([]);
  const [text, onChangeText] = React.useState('');
  const todoList = React.useRef<FlatList>(null);

  const addItem = () => {
    let newItem: Item = {
      id: uuid.v4().toString(),
      title: text,
      isDone: false,
    };
    let t = [...data, newItem];
    setData(t);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Today</Text>

      <List
        data={data}
        ref={todoList}
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

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={addItem}
        color="#841584"
        bg="gray"
        padding={10}
        margin={12}
        borderRadius={4}
        alignItems={'center'}>
        <Text>Add Item</Text>
      </Button>
    </SafeAreaView>
  );
};

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

export default App;
