import React from 'react';
import { View, FlatList } from 'react-native';
import Markdown from 'react-native-easy-markdown';
import { styles } from '../styles/markdownStyle';
import CoverTable from './CoverTable';

export const DetailsScreen = ({ route, navigation }) => {
  const { id, item } = route.params;

  const renderItem = (props) => {
    return (
      <View>
        {id === 4 && <CoverTable />}
        <Markdown markdownStyles={styles}>{props.item}</Markdown>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={item.details}
        renderItem={renderItem}
        keyExtractor={(item) => Math.floor(Math.random() * 100)}
      />
    </View>
  );
};
