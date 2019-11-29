import axios from 'axios';

const API_URL = 'http://46.8.127.158:7780';

export const sendImage = source => {
  const data = new FormData();
  data.append('multipartFile', {
    uri: source.uri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  });
  return axios.post(`${API_URL}/images`, data);
};
