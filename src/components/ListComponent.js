import React from 'react'
import {View, Text, FlatList, StyleSheet, Image} from 'react-native'
import moment from 'moment'
const PLACEHOLDER_IMAGE = 'https://i.kym-cdn.com/entries/icons/original/000/001/030/DButt.jpg'
const ListComponent = ({movies, lol}: Array) => {
  return (
    <View style={styles.container}>
      <FlatList
        // onScroll={console.warn}
        data={movies}
        renderItem={ListItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

const ListItem = ({item}: Object) => {
  console.warn(item.moreQuotes)
  return (
    <View style={styles.item}>
      <Text style={styles.listItem}>{item.title}</Text>
      <Text style={styles.listItem}>{item.year}</Text>
      <Text style={styles.listItem}>{item.phrase}</Text>
      <Text style={styles.listItem}>{moment(item.time).format('HH:mm:ss')}</Text>
      <Image source={!item.image ? { uri: PLACEHOLDER_IMAGE} : {uri: item.image}} style={styles.image} />
      {item?.moreQuotes?.map((quote, index) => <Text style={styles.listItem} key={index}>{quote}</Text>)}
    </View>
  )
}

const keyExtractor = (item, index) => index.toString()


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  item: {
    margin: 20,
    padding: 20,
    flex: 1,
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 20
  },
  listItem: {
    color: 'white'
  },
  image: {
    margin: 10,
    alignSelf: 'center',
    borderRadius: 20,
    height: 200,
    width: 200
  }
})

export default ListComponent

/*
{
  "title_id": "M1290945ee",
  "title": "Outbreak",
  "phrase_id": 12551240,
  "year": 1995,
  "image": "f21080e9b3d92f40ab21a8811be51a5b1c899656.jpg",
  "root_imdb": 0,
  "serie": null,
  "num_found": 3,
  "phrase": "Hej.",
  "time": 503050
}
*/
