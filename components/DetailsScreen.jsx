import React from 'react';
import { View, FlatList, Image } from 'react-native';
// import Markdown from 'react-native-easy-markdown';
import Markdown from 'react-native-markdown-display';
import { styles } from '../styles/markdownStyle';
import CoverTable from './CoverTable';
import painAlgorithmNOF from '../assets/painAlgorithmNOF.png';

export const DetailsScreen = ({ route, navigation }) => {
  const { id, item } = route.params;

  const rules = {
    image: (node, children, parent, styles) => (
      <Image
        key={node.key}
        source={painAlgorithmNOF}
        style={{ width: 400, height: 450 }}
      />
    ),
  };

  const renderItem = (props) => {
    return (
      <View>
        {id === 4 && <CoverTable />}
        <Markdown style={styles} rules={rules}>
          {props.item}
        </Markdown>
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
