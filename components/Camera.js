import React, { useState, useRef, useEffect } from 'react';
import { Platform } from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { Camera as RNCamera } from 'expo-camera';
import FeatherIcon from '@expo/vector-icons/Feather';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { takePicture } from '../stores/picture';
import $loaders, { changeLoaderState } from '../stores/loaders';
import { useStore } from 'effector-react';

const updateRatio = (set, ref) => async () => {
  if (Platform.OS === 'android' && ref.current.getSupportedRatiosAsync) {
    const ratios = await ref.current.getSupportedRatiosAsync();
    const [actualRatio] = ratios;
    set(actualRatio);
  }
};

const snap = (ref, callback) => async () => {
  if (ref) {
    changeLoaderState({ snap: true });
    const result = await ref.current.takePictureAsync();
    changeLoaderState({ snap: false });
    callback(result);
  }
};

const pickImage = callback => async () => {
  changeLoaderState({ pickImage: true });
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    quality: 1,
  });
  changeLoaderState({ pickImage: false });

  if (result.cancelled) {
    return;
  }

  callback(result);
};

const Camera = props => {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [ratio, setRatio] = useState(null);
  const [permisisonGranted, setPermission] = useState(false);
  const cameraRef = useRef(null);
  const loaders = useStore($loaders);

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

  onGetPhoto = picture => {
    takePicture(picture);
    props.navigation.navigate('Results');
  };

  return permisisonGranted ? (
    <RNCamera
      type={type}
      style={styles.camera}
      onCameraReady={updateRatio(setRatio, cameraRef)}
      ratio={ratio}
      ref={cameraRef}
    >
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage(onGetPhoto)}>
          {loaders.pickImage ? (
            <ActivityIndicator color="white" />
          ) : (
            <FeatherIcon name="image" style={styles.icon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createPhoto}
          onPress={snap(cameraRef, onGetPhoto)}
        >
          {loaders.pickImage || loaders.snap ? (
            <ActivityIndicator color="black" />
          ) : (
            <FeatherIcon name="search" style={styles.createPhotoIcon} />
          )}
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
