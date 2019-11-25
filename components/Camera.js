import React, { useState, useRef, useEffect } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera as RNCamera } from 'expo-camera';
import FeatherIcon from '@expo/vector-icons/Feather';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const updateRatio = (set, ref) => async () => {
  if (Platform.OS === 'android' && ref.current.getSupportedRatiosAsync) {
    const ratios = await ref.current.getSupportedRatiosAsync();
    const [actualRatio] = ratios;
    set(actualRatio);
  }
};

const snap = ref => async () => {
  if (ref) {
    let photo = await ref.current.takePictureAsync();
    console.log(photo);
  }
};

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    quality: 1,
  });

  console.log(result);
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
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <FeatherIcon name="image" style={styles.icon}></FeatherIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createPhoto} onPress={snap(cameraRef)}>
          <FeatherIcon
            name="search"
            style={styles.createPhotoIcon}
          ></FeatherIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onTypeChange}>
          <FeatherIcon name="refresh-cw" style={styles.icon}></FeatherIcon>
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
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    height: 48,
    width: 48,
    marginVertical: 16,
    marginHorizontal: 8,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createPhoto: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginVertical: 16,
    backgroundColor: 'white',
    borderRadius: 32,
    borderWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  createPhotoIcon: {
    fontSize: 24,
  },
  icon: {
    color: 'white',
    fontSize: 24,
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
