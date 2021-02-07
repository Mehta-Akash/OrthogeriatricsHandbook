import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from './ListItem';
import { Feather as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 350,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    overflow: 'hidden',
  },
});
//{ heading, id, subCategories }
export const List = ({ props, navigation }) => {
  const [currentId, setCurrentId] = useState(null);
  console.log(props.id);
  //   const height = currentId ? 'auto' : 0;
  //   const bottomRadius = currentId ? 0 : 8;

  return (
    <View>
      <TouchableOpacity
        onPress={() => setCurrentId(props.id === currentId ? null : props.id)}
      >
        <View style={[styles.container]}>
          <Text style={styles.title}>{props.heading}</Text>
          {props.subCategories.length > 0 && (
            <Icon name="chevron-down" color="black" size={24} />
          )}
        </View>
      </TouchableOpacity>
      <View style={[styles.items]}>
        {props.id === currentId &&
          props.subCategories.map((item, key) => (
            // console.log('KEY in List', key),
            <ListItem
              {...{ item }}
              // theKey={key}
              isLast={props.id === 7}
              navigation={navigation}
              id={props.id}
            />
          ))}
      </View>
    </View>
  );
};
