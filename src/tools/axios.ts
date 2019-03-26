import axios from 'axios';

import authenticityToken from './authenticityToken';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': authenticityToken(),
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  }
});

export default instance;
