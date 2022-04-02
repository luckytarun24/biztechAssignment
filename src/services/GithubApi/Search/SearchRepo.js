import instance from "../../Interceptor";

const SearchRepo = async ({ userName, searchText }) => {
  return instance({
    method: "GET",
    url: `search/repositories?q=${searchText}+user:${userName}`,
  });
};

export default SearchRepo;
