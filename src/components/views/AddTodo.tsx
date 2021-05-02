import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import Item from '../../models/Item';
import HeaderButton from '../base/HeaderButton';
import TodoDone from '../icons/TodoDone';
import TodoNotDone from '../icons/TodoNotDone';
import Box from '../styled/Box';
import Button from '../styled/Button';
import Input from '../styled/Input';
import Text from '../styled/Text';

export default function AddTodo() {
  const [todo, setTodo] = useState<Item>({id: '', title: '', isDone: false});
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton
          onPress={() => navigation.goBack()}
          text="Cancel"
          marginLeft={18}
        />
      ),
      headerRight: () => (
        <HeaderButton
          onPress={() => handlePress()}
          text="Done"
          marginRight={18}
        />
      ),
    });
  }, [navigation, todo]);

  function handlePress() {
    if (todo !== undefined && todo.title != undefined && todo.title !== '') {
      navigation.navigate('Home', {
        TodoItem: {...todo, id: uuid.v4()},
      });
    } else {
      setError(true);
    }
  }

  return (
    <Box
      bg="white"
      flex={1}
      flexDirection="row"
      alignContent="center"
      paddingTop={30}>
      <Button
        paddingX={18}
        onPress={() => setTodo({...todo, isDone: !todo.isDone})}>
        {todo.isDone ? <TodoDone /> : <TodoNotDone />}
      </Button>
      <Box flex={1} flexDirection="column">
        <Input
          multiline={true}
          onChangeText={e => {
            if (e !== '') setError(false);
            setTodo({...todo, title: e});
          }}
          fontSize={18}
          placeholder="What do you want to do?"
        />
        {error && (
          <Text color="red" marginTop={1}>
            Fill this field
          </Text>
        )}
      </Box>
    </Box>
  );
}
