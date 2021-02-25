import axios from "axios";

export default axios.create({
  baseURL: 'https://t0u4i52ro7.execute-api.us-east-1.amazonaws.com/api/v1',
  headers: {
    "Content-type": "application/json"
  }
});
