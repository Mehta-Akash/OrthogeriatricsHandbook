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
    paddingHorizontal: 40,
  },
  developer: {
    marginTop: 20,
    marginBottom: 10,
    color: '#FF5F1F',
    fontWeight: 'bold',
  },
});

function About() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.body}>
          This is the first ortho-geriatrics app that covers the key principles
          of orthgeriatrics. This is based on NICE guidelines and local trust
          guidelines of West Sussex.
        </Text>
        <Text style={styles.developer}>Developers of the OG app project:</Text>
        {developer.map((obj) => {
          return (
            <Text style={{ width: '80%' }} key={obj.key}>
              <Text style={{ fontWeight: 'bold' }}>{obj.name}</Text>
              <Text>{obj.position}</Text>
            </Text>
          );
        })}

        <Text style={styles.developer}>Acknowledgements</Text>

        {contributors.map((obj) => {
          return (
            <Text style={{ width: '80%' }} key={obj.key}>
              <Text style={{ fontWeight: 'bold' }}>{obj.name}</Text>
              <Text>{obj.position}</Text>
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

const contributors = [
  {
    name: 'Tamara Khaguli  ',
    position: 'IMT Y2',
    key: 1,
  },
  {
    name: 'Anna Whiteside  ',
    position: 'FY2',
    key: 2,
  },
  {
    name: 'Hellen Wilson  ',
    position:
      'Ortho-geriatric Consultant,Royal Surrey County Hospital NHS Foundation Trust ',
    key: 3,
  },
  {
    name: 'Sharon Avery  ',
    position: 'Lead Anaesthetist Trauma St Richards Hospital',
    key: 4,
  },
  {
    name: 'Helen Herniman  ',
    position: 'Middleton Ward Senior Sister ',
    key: 5,
  },
  {
    name: 'Jo Williams  ',
    position: 'Physiotherapy technical Instructor ',
    key: 6,
  },
  {
    name: 'Victoria Harmshaw  ',
    position: 'Staff Nurse ',
    key: 7,
  },
  {
    name: 'Hannah Seagreaves  ',
    position: 'Occupational Therapist ',
    key: 8,
  },
  {
    name: 'Scarlett Silvester  ',
    position: 'Capacity and Resilience Practitioner',
    key: 9,
  },
];

const developer = [
  {
    name: 'Zahed Ikram  ',
    position: 'Ortho-geriatric Consultant, St Richards Hospital',
    key: 10,
  },
  {
    name: 'Fahad Javed  ',
    position: 'Ortho-geriatric Registrar',
    key: 11,
  },
  {
    name: 'Alok Mehta  ',
    position: 'FY2 St Richards Hospital',
    key: 12,
  },
  {
    name: 'Akash Mehta  ',
    position: 'FY1 Croydon University Hospital',
    key: 13,
  },
];

export default About;
