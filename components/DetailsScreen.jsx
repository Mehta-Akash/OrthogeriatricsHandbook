import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Markdown from 'react-native-easy-markdown';
import { styles } from '../styles/markdownStyle';

export const DetailsScreen = ({ route, navigation }) => {
  const { id, item } = route.params;

  const renderItem = (props) => {
    return <Markdown markdownStyles={styles}>{props.item}</Markdown>;
  };

  return (
    <View>
      <FlatList
        data={item.details}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
