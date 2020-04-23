import React, {useRef} from 'react'; // 프레임 워크
import {View, TouchableOpacity, Text, Dimensions} from 'react-native'; // 프레임워크
import {NavigationContainer} from '@react-navigation/native'; // 이동 라우터 설정
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // 하단 탭
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modalize} from 'react-native-modalize'; // 모달
import {Host, Portal} from 'react-native-portalize'; // 모달 필요한 라이브러리
import MapView, {Maker, PROVIDER_GOOGLE} from 'react-native-maps'; // 구글 맵

const {width, height} = Dimensions.get('window'); //스크린 가로 세로
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const Tab = createBottomTabNavigator();

const ExamplesScreen = () => {
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

export default App;
