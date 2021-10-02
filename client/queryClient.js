import axios from "axios";
import { request } from "graphql-request";

// axios.defaults.baseURL = "http://localhost:8000";

// const fetcher = async (method, url, ...rest) => {
//   const res = await axios[method](url, ...rest);
//   return res.data;
// };
//
// export default fetcher;

const URL = "http://localhost:8000/graphql";

export const fetcher = (query, variables) => request(URL, query, variables);

export const QueryKeys = {
  MESSAGES: "MESSAGES",
  MESSAGE: "MESSAGE",
  USERS: "USERS",
  USER: "USER",
};
