/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react'; // 프레임 워크
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'; // 프레임워크
import {NavigationContainer} from '@react-navigation/native'; // 이동 라우터 설정
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // 하단 탭
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modalize} from 'react-native-modalize'; // 모달
import {Host, Portal} from 'react-native-portalize'; // 모달 필요한 라이브러리
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // 구글 맵

const Tab = createBottomTabNavigator();

export const UpModal = () => {
  const modalRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalRef.current?.open();
  };
  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text style={{marginTop: 100}}>Open the modal</Text>
      </TouchableOpacity>
      <Portal>
        <Modalize snapPoint={384} ref={modalRef}>
          <Text>...your content</Text>
        </Modalize>
      </Portal>
    </>
  );
};

class ExamplesScreen extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      markers: [
        {
          title: 'hello',
          description: 'asds',
          coordinates: {
            latitude: 37.4568565,
            longitude: 126.7029735,
          },
        },
        {
          title: 'hi',
          coordinates: {
            latitude: 17.458,
            longitude: 78.3731,
          },
        },
        {
          title: 'gyp',
          coordinates: {
            latitude: 17.468,
            longitude: 78.3631,
          },
        },
        {
          title: 'nig',
          coordinates: {
            latitude: 17.568,
            longitude: 78.3831,
          },
        },
        {
          title: 'Yoy',
          coordinates: {
            latitude: 17.588,
            longitude: 78.4831,
          },
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 37.4568565,
            longitude: 126.7029735,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          style={styles.map}
          showsUserLocation
          showsMyLocationButton
          showsCompass
          zoomEnabled>
          {this.state.markers.map(
            (marker: {coordinates: any; title: any; description: any}) => (
              <Marker
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
              />
            ),
          )}
        </MapView>
        <UpModal />
      </View>
    );
  }
}

const CategoryScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Category</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Host>
      <Tab.Navigator>
        <Tab.Screen
          name="Examples"
          component={ExamplesScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={CategoryScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="alert" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </Host>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
  },
});

export default App;
