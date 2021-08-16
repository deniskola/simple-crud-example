import axios from "axios";

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000); //fake delay
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Quotes = {
  list: () => requests.get("/quotes"),
  details: (id) => requests.get(`/quotes/${id}`),
  create: (quote) => axios.post("/quotes", quote),
  update: (quote) => axios.put(`/quotes/${quote.id}`, quote),
  delete: (id) => axios.delete(`/quotes/${id}`),
};

const agent = {
  Quotes,
};

export default agent;
