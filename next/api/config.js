export const BASE_URL = 'http://127.0.0.1:4000/api';

export const endpoints = {
  switch: `${BASE_URL}/digital_pins/action`,
  sensorData: `${BASE_URL}/analog_sensors/data`,
  devices: `${BASE_URL}/devices`,
  auth: `${BASE_URL}/auth/login`,
  me: `${BASE_URL}/me`,
  user: `${BASE_URL}/users/`,
  order: `${BASE_URL}/orders/`
};

export const allowedResorses = ['/team', '/order']