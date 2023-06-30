import sendRequest from "./send-request";
const BASE_URL = '/api/fights';

export async function getFightItems() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function create(fightData) {
  return sendRequest(BASE_URL, 'POST', {fightData});
}