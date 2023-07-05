import sendRequest from './send-request';

const BASE_URL = '/api/videos';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function upload(formData) {
  console.log('formData', formData);
  return sendRequest(`${BASE_URL}/upload`, 'POST', formData);
}