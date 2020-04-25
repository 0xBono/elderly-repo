import React, {useRef, constructor} from 'react'; // 프레임 워크
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native'; // 프레임워크
import {NavigationContainer} from '@react-navigation/native'; // 이동 라우터 설정
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // 하단 탭
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modalize} from 'react-native-modalize'; // 모달
import {Host, Portal} from 'react-native-portalize'; // 모달 필요한 라이브러리
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // 구글 맵
import PlaceData from './src/json/place.json';

const Tab = createBottomTabNavigator();

// const ExamplesScreen = () => {
//   const modalRef = useRef<Modalize>(null);

//   const onOpen = () => {
//     modalRef.current?.open();
//   };

//   const {width, height} = Dimensions.get('window'); //스크린 가로 세로
//   const ASPECT_RATIO = width / height;
//   const LATITUDE = 37.4568565;
//   const LONGITUDE = 126.7029735;
//   const LATITUDE_DELTA = 0.0922;
//   const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

//   return (
//     <>
//       {/* <TouchableOpacity onPress={onOpen}>
//         <Text style={{marginTop: 100}}>Open the modal</Text>
//       </TouchableOpacity>

//       <Portal>
//         <Modalize snapPoint={384} ref={modalRef}>
//           <Text>...your content</Text>
//         </Modalize>
//       </Portal> */}
//       <View style={styles.container}>
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           style={styles.map}
//           initialRegion={{
//             latitude: LATITUDE,
//             longitude: LONGITUDE,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }}
//         />
//       </View>
//     </>
//   );
// };

export class ExamplesScreen extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      mapMarker: [],
    };
  }
  render() {
    const {width, height} = Dimensions.get('window'); //스크린 가로 세로
    const ASPECT_RATIO = width / height;
    const LATITUDE = 37.4568565;
    const LONGITUDE = 126.7029735;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    console.log(PlaceData);
    interface mapMarker {
      LATITUDE: any;
      LONGITUDE: any;
    }
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          {this.state.mapMarker.map((mapMarker: any) => (
            <Marker
              coordinate={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
              }}
              title={'ㅁㅇㅁㄴㅇㄴㅁ'}
              description={'ㅁㄴㅇㄴㅁㅇㄴㅁㅇ'}
            />
          ))}
        </MapView>
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
});

export default App;
