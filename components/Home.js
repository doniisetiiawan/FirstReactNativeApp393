import React from 'react';
import { Text, View } from 'react-native';

import styles from './HomeStyles';

const Home = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>

    <View style={styles.columns}>
      <View style={styles.column1}>
        <Text style={styles.column1Text}>Column 1</Text>
      </View>
      <View style={styles.column2}>
        <Text style={styles.column2Text}>Column 2</Text>
      </View>
      <View style={styles.column3}>
        <Text style={styles.column3Text}>Column 3</Text>
      </View>
    </View>
  </View>
);

export default Home;
