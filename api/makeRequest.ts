import axios from "axios";

export default ({
  url = "/",
  method = "get",
  params = {},
  data = {},
  headers = {},
}) => {
  return axios({
    url,
    method,
    headers: { ...headers },
    params,
    data,
  }).catch((error) => {
    console.error(error);
  });
};
