/* eslint-disable react-native/no-inline-styles */
import { Canvas } from '@shopify/react-native-skia';
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
// import { SkImage } from 'react-native-skia-lib';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Basic app</Text>
      <Text>abcd</Text>
      <Canvas style={{ flex: 1, backgroundColor: 'green' }}>
        {/* <SkImage
          rect={rect(0, 0, 100, 100)}
          image="https://plus.unsplash.com/premium_photo-1695370767476-d942b94f027c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        /> */}
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
