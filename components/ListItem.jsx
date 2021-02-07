import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    color: 'white',
    overflow: 'hidden',
  },
  item: {
    flex: 1,
  },
});

export const ListItem = ({ item, isLast, navigation, theKey, id }) => {
  const bottomRadius = isLast ? 8 : 0;
  //   const bottomMargin = isLast ? 10 : 0;
  console.log('KEY', theKey);
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
          //   marginBottom: bottomMargin,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            // itemId: theKey,
            id,
            item,
          });
        }}
      >
        <Text style={styles.item}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
