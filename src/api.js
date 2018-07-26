import { APP_URL } from './config';

export const fetchApi = async (endpoint, payload = {}, method = 'get', headers = {}) => {
  if(!(payload instanceof FormData)){
    payload = JSON.stringify(payload);
  }
  let options = {
    headers: Object.assign(headers, {}),
    body: payload,
    method,
  };

  if(method === 'get' || method === 'head'){ delete options['body']; }

  let response = await fetch(`${APP_URL}${endpoint}`, options);

  let json = {};

  if(response.status === 401){
    throw Error('Unauthenticated');
  } else if(!response.ok){
    let error = await response.text();
    throw Error(error);
  } else {
    json = await response.json();
  }

  return json;
};
