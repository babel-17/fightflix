import sendRequest from "./send-request";

const BASE_URL = "/api/fights"; 

export function getAll() {
  return sendRequest(BASE_URL);
}

export function create(fightData) {
    return sendRequest(BASE_URL, "POST", fightData);
}