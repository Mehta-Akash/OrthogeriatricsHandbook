import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import data from '../data';
import { List } from './List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f6',
    paddingTop: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Chapters</Text>
        <List props={data[0]} navigation={navigation}/>
        <List props={data[1]} />
        <List props={data[2]} />
        <List props={data[3]} />
        <List props={data[4]} />
        <List props={data[5]} />
        <List props={data[6]} />

        {/* {data.map((item) => (
          <Text>
            <List props={item} />
          </Text>
        ))} */}
      </View>
    </ScrollView>
  );
};
