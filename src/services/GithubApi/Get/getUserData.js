import instance from "../../Interceptor";

const GetUserData = async (userName) => {
  return instance({
    method: "GET",
    url: `users/${userName}`,
  });
};

export default GetUserData;
