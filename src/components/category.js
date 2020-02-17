/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Category extends React.Component {
  render() {
    const {CategoryText, IconName} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.category}>
          <TouchableOpacity>
            <View style={styles.Icons}>
              <Icon
                style={{textAlign: 'center'}}
                name={IconName}
                size={60}
                color="#212121"
              />
              <Text
                style={{
                  alignContent: 'center',
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: '100',
                  color: '#212121',
                }}>
                {CategoryText} {/* 아이콘 하단에 들어갈 텍스트 */}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  category: {
    height: hp('15%'),
    width: wp('20%'),
  },
  Icons: {},
});

export default Category;
