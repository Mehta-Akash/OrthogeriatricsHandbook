import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import data from '../data';
import { List } from './List';
import Table from './CoverTable';
import image from '../assets/painAlgorithmNOF.png';

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
        <List props={data[0]} key={100} navigation={navigation} />
        <List props={data[1]} key={200} navigation={navigation} />
        <List props={data[2]} key={300} navigation={navigation} />
        <List props={data[3]} key={400} navigation={navigation} />
        <List props={data[4]} key={500} navigation={navigation} />
        <List props={data[5]} key={600} navigation={navigation} />
        <List props={data[6]} key={700} navigation={navigation} />
      </View>
    </ScrollView>
  );
};
