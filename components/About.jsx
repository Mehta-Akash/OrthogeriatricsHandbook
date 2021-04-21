import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f6',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 20,
  },
});

function About() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.body}>
          Ortho-geriatrics handbook, created by Akash Mehta
        </Text>
      </View>
    </ScrollView>
  );
}

export default About;
