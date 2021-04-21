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

export const List = ({ props, navigation }) => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setCurrentId(props.id === currentId ? null : props.id);
          !props.subCategories[0].title &&
            navigation.navigate('Details', {
              id: props.id,
              item: props.subCategories[0],
            });
        }}
      >
        <View style={[styles.container]}>
          <Text style={styles.title}>{props.heading}</Text>
          {props.subCategories[0].title && (
            <Icon name="chevron-down" color="black" size={24} />
          )}
        </View>
      </TouchableOpacity>

      <View style={[styles.items]}>
        {/* if the current item is selected and has subcategories to choose from - show them on touch */}
        {props.id === currentId &&
          props.subCategories[0].title &&
          props.subCategories.map((item, key) => (
            <ListItem
              {...{ item }}
              key={Math.floor(Math.random() * 100)}
              isLast={props.id === 7}
              navigation={navigation}
              id={props.id}
            />
          ))}
      </View>
    </View>
  );
};
