import React, { useState, useRef, useEffect } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera as RNCamera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

const updateRatio = (set, ref) => async () => {
  if (Platform.OS === 'android' && ref.current.getSupportedRatiosAsync) {
    const ratios = await ref.current.getSupportedRatiosAsync();
    const [actualRatio] = ratios;
    set(actualRatio);
  }
};

const Camera = props => {
  const [type, setType] = useState(RNCamera.Constants.Type.front);
  const [ratio, setRatio] = useState(null);
  const [permisisonGranted, setPermission] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA).then(({ status }) => {
      setPermission(status === 'granted');
    });
  }, []);

  onTypeChange = () =>
    setType(
      type === RNCamera.Constants.Type.front
        ? RNCamera.Constants.Type.back
        : RNCamera.Constants.Type.front,
    );

  return permisisonGranted ? (
    <RNCamera
      type={type}
      style={styles.camera}
      onCameraReady={updateRatio(setRatio, cameraRef)}
      ratio={ratio}
      ref={cameraRef}
    >
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.flipButton} onPress={onTypeChange}>
          <Text style={styles.flipButtonText}>Flip</Text>
        </TouchableOpacity>
      </View>
    </RNCamera>
  ) : (
    <View style={styles.noPermissions}>
      <Text style={styles.noPermissionsText}>
        Camera permissions not granted - cannot open camera preview.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  flipButton: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  flipButtonText: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    color: 'white',
  },
  noPermissions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  noPermissionsText: {
    textAlign: 'center',
    color: 'black',
  },
});

export default Camera;
