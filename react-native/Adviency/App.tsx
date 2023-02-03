import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
type Gift = {
  id: string;
  gift: string;
};
const uniqueId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

export const App = () => {
  const [giftList, setGiftList] = useState<Gift[]>([
    {id: '0', gift: 'regalo 1'},
    {id: '1', gift: 'regalo 2'},
    {id: '2', gift: 'regalo 3'},
  ]);
  const [newGift, setNewGift] = useState('');
  const createGift = () => {
    setGiftList([...giftList, {id: uniqueId(), gift: newGift}]);
    setNewGift('');
  };
  const deleteGift = (id: string) => {
    const filteredList = giftList.filter(gift => gift.id !== id);
    setGiftList(filteredList);
  };
  const deleteAllGift = () => setGiftList([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Regalos</Text>
      <View style={styles.taskList}>
        {giftList.map(({id, gift}) => (
          <View key={id} style={styles.taskWrapper}>
            <Text style={styles.taskText}>{gift}</Text>
            <TouchableOpacity
              onPress={() => deleteGift(id)}
              style={styles.deleteBtn}>
              <Text>Borrar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => deleteAllGift()}
        style={styles.deleteAllBtn}>
        <Text>Borrar todo</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <TextInput
          onSubmitEditing={createGift}
          style={styles.formInput}
          value={newGift}
          onChangeText={text => setNewGift(text)}
          placeholder="Agregar regalo"
        />
        <TouchableOpacity style={styles.formBtn} onPress={createGift}>
          <Text style={styles.formBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingVertical: 30,
    textAlign: 'center',
  },
  taskList: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
  },
  taskWrapper: {
    alignItems: 'center',
    backgroundColor: '#282828',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  taskText: {
    fontSize: 18,
  },
  deleteBtn: {
    backgroundColor: '#b02525',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deleteAllBtn: {
    backgroundColor: '#b02525',
    width: '90%',
    // height: 20,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  form: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  formInput: {
    backgroundColor: '#282828',
    borderRadius: 10,
    fontSize: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
  formBtn: {
    alignItems: 'center',
    aspectRatio: '1/1',
    backgroundColor: '#1864ab',
    borderRadius: 999,
    justifyContent: 'center',
    width: 50,
  },
  formBtnText: {
    fontSize: 30,
  },
});
