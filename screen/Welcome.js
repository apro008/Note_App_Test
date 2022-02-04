import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Slider from '../component/Slider';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Slider />
      </View>
      <View style={styles.topView}>
        <Button
          title="Counter With Reducer"
          type="outline"
          raised={true}
          onPress={() => navigation.navigate('Practice')}
        />
        <Button
          title="Counter With Redux"
          type="outline"
          raised={true}
          onPress={() => navigation.navigate('reduxCounter')}
        />
      </View>
      <View style={styles.bottomView}>
        <Button
          title="Note App"
          type="outline"
          raised={true}
          onPress={() => navigation.navigate('Intro')}
        />
        <Button
          title="Counter With State"
          type="outline"
          raised={true}
          onPress={() => navigation.navigate('counterState')}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: -1,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 30,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 10,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
});
