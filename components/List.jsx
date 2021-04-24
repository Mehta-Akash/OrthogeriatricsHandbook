import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem } from './ListItem';
import { Feather as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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

  const ShevronDisplay = () => {
    if (props.subCategories[0].title) {
      return <Icon name="chevron-down" color="black" size={24} />;
    }
    return <Text></Text>;
  };

  return (
    <View style={{ borderRadius: 10 }}>
      <Pressable
        key={props.id}
        style={styles.container}
        onPress={() => {
          setCurrentId(props.id === currentId ? null : props.id);
          !props.subCategories[0].title &&
            navigation.navigate('Details', {
              id: props.id,
              item: props.subCategories[0],
            });
        }}
        android_ripple={{ color: '#A0A0A0' }}
      >
        <Text style={styles.title}>{props.heading}</Text>
        {props.subCategories[0].title && currentId ? (
          <Icon name="chevron-up" color="black" size={24} />
        ) : (
          <ShevronDisplay />
        )}
      </Pressable>

      <View style={[styles.items]}>
        {/* if the current item is selected and has subcategories to choose from - show them on touch */}
        {props.id === currentId &&
          props.subCategories[0].title &&
          props.subCategories.map((item, key) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {
                  // itemId: theKey,
                  id: props.id,
                  item,
                });
              }}
              key={item.id}
            >
              <ListItem
                {...{ item }}
                key={Math.floor(Math.random() * 100)}
                isLast={props.id === 7}
                navigation={navigation}
                id={props.id}
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};
