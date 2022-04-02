import instance from "../Url";
instance.interceptors.request.use((config) => {
  if (true) {
    config.headers["Authorization"] =
      "Bearer " + process.env.REACT_APP_GIT_TOKEN;
  }
  return config;
});

export default instance;
