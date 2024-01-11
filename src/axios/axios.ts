import axios from 'axios';

import { LocalStorageService } from '~/app/services';

axios.interceptors.request.use((req) => {
  return req;
});

const apiClient = axios.create({
  baseURL: 'https://dentara.cypsoft.tech/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

/* Intercept request and add Authorization headers */
apiClient.interceptors.request.use(async (req) => {
  console.log(`${req.method}  ${req.url}`);
  //TODO get from LS
  const authUser = LocalStorageService.get('authUser');
  if (authUser) {
    req.headers.Authorization = `Bearer ${authUser.data.token}`;
  }
  return req;
});

/* Intercept response and handle errors */
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { response } = error;
    console.log('error 401', response.data);
    if ([401, 403, 404].includes(response?.status)) {
      LocalStorageService.remove('authUser');
    }
    return Promise.reject(error);
  },
);

export { apiClient };
