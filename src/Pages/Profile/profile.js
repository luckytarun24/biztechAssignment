import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Constant
import { tabList } from "./constants";

//Component
import {
  Button,
  Image,
  Tabs,
  Textfield,
  DropDown,
  RepoBox,
} from "../../components";

//services
import { GetUserRepo, SearchRepo, GetUserData } from "../../services/GithubApi";

const Profile = () => {
  //State
  const [repoData, setRepoData] = useState([]);
  const [userData, setUserData] = useState({});

  //Params
  const { user = "" } = useParams();

  // Function to search for repositories by text
  const search = (event) => {
    try {
      SearchRepo({
        userName: user,
        searchText: event.target.value,
      }).then((respone) => {
        setRepoData(respone.data.items);
      });
    } catch (error) {}
  };

  // Hook used for getting user data
  useEffect(() => {
    try {
      GetUserData(user).then((respone) => {
        setUserData(respone.data);
      });
    } catch (error) {}
  }, []);

  // Hook used for getting user repo
  useEffect(() => {
    try {
      GetUserRepo(user).then((respone) => {
        setRepoData(respone.data);
      });
    } catch (error) {}
  }, []);
  return (
    <React.Fragment>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <Image
              path={"/assets/images/user.jpg"}
              style={{ width: "70%", height: 300 }}
            />
            <h2>{userData.name}</h2>
            <h3 style={{ color: "#57606a" }}>{user}</h3>
            <Button
              style={{
                backgroundColor: "#f6f8fa",
                textDecoration: "none",
                borderRadius: 5,
                width: "70%",
                padding: "2px 8px",
              }}
            >
              Edit profile
            </Button>
          </div>
          <div class="col-sm-8">
            <Tabs list={tabList} style={{ padding: 15 }} />
            <div class="row">
              <div class="col-sm-6">
                <Textfield
                  style={{ input: { margin: 10 } }}
                  props={{ onChange: (event) => search(event) }}
                />
              </div>
              <div class="col-sm-6">
                <DropDown
                  label="Type"
                  style={{ button: { margin: 10, width: 100 } }}
                />
                <DropDown
                  label="language"
                  style={{ button: { margin: 10, width: 100 } }}
                />
                <DropDown label="sort" style={{ button: { margin: 10 } }} />
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#40a54e",
                    textDecoration: "none",
                    borderRadius: 5,
                    padding: "2px 8px",
                  }}
                >
                  New
                </Button>
              </div>
            </div>
            <hr />
            {repoData &&
              repoData.map(({ name, description }, index) => (
                <React.Fragment>
                  <RepoBox name={name} description={description} key={index} />
                  <hr />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Profile;
