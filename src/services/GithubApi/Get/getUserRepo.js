import instance from "../../Interceptor";

const GetUserRepo = async (userName) => {
  return instance({
    method: "GET",
    url: `users/${userName}/repos`,
  });
};

export default GetUserRepo;
