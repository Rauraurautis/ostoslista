import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default function App() {
  const [product, setProduct] = useState("")
  const [data, setData] = useState([])

  const addItem = () => {
    setData(data.concat(product))
    setProduct("")
  }

  const clearItems = () => {
    setData([])
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textfield} onChangeText={(text) => setProduct(text)} value={product} />
      <Text>Hello World</Text>
      <View style={styles.buttoncontainer}>
        <Button title="ADD" onPress={() => addItem()} />
        <Button title="CLEAR" onPress={() => clearItems()}/>
      </View>
      <Text style={styles.shoppinglistheader}>Shopping List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Text style={styles.itemtext}>{item}</Text>
        }
        keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 150,
    paddingTop: 10
  },
  shoppinglistheader: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20
  },
  textfield: {
    marginTop: 50,
    width: 250,
    borderWidth: 1,
    borderColor: "grey"
  },
  itemtext: {
    fontSize: 18
  }
});
