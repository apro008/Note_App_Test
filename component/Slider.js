import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Dimensions } from 'react-native';

const images = [
  'https://images.unsplash.com/photo-1612012460576-5d51b5b04b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1105189/pexels-photo-1105189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const { width } = Dimensions.get('window');
const height = width * 0.6;

// const state = {
//   selectedIndex: 0,
// };

// const setSelectedIndex = ({nativeEvent}) => {
//   const selectedIndex = Math.ceil(
//     nativeEvent.layoutMessurement.width / nativeEvent.contentOffset.x,
//   );
//   setState({selectedIndex});
// };

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getSelectedIndex = ({ nativeEvent }) => {
    const offSet = nativeEvent.contentOffset.x;
    const selectedIndex = Math.ceil(offSet / width);
    setSelectedIndex(selectedIndex);
  };
  console.log('selectedIndex', selectedIndex);
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          onScroll={getSelectedIndex}
          showsHorizontalScrollIndicator={false}
          data={images}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item, index }) => <Image source={{ uri: item }} style={styles.image} />}
        />
      </ScrollView>

      <View
        style={{
          //borderWidth: 2,
          //   flex: 1,
          //   borderColor: 'red',
          //   justifyContent: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 2,
          alignSelf: 'center',
        }}>
        {images.map((image, index) =>
          index === selectedIndex ? (
            <Text key={image} style={{ color: 'white' }}>
              ⚫
            </Text>
          ) : (
            <Text key={index} style={{ color: 'white' }}>
              ⚪
            </Text>
          ),
        )}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    //marginTop: 10,
    height,
    width,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
    borderRadius: 10,
    //margin: 10,
  },
});

// {
//   images.map((image, index) => (
//     <Image
//       key={index}
//       source={{uri: image}}
//       style={{height: 200, width: 200, resizeMode: 'cover'}}
//     />
//   ));
// }
