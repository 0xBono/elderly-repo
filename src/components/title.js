/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Title extends React.Component {
  render() {
    const {LargeTitle} = this.props;
    return (
      <View style={styles.LargeTitle}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{LargeTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LargeTitle: {
    flex: 0.1,
    padding: 30,
    width: wp('100%'),
  },
});

export default Title;
