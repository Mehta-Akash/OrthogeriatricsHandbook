import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import data from '../data';

export const HomeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = React.useState(null);

  return (
    <View style={styles.container}>
      {data.map(({ heading, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={heading}
            onPress={() => {
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <View style={[styles.card]}>
              <Text style={[styles.heading]}>{heading}</Text>
              {index === currentIndex && (
                <View style={styles.subCategoriesList}>
                  {subCategories.map((subCategory) => (
                    <Text key={subCategory} style={[styles.body]}>
                      {subCategory}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    // letterSpacing: -2,
  },
  subCategoriesList: {},
  body: {
    fontSize: 15,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
});

{
  /* <Header /> */
}
{
  /* <View style={styles.content}>
        <View>
          <FlatList
            data={links}
            renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}
          />
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View> */
}
