Define .env file with this two variable to access git REST API  
REACT_APP_URL=https://api.github.com/
REACT_APP_GIT_TOKEN=""

Note -: Use route to access hoome page "http://localhost:3000/profile/{USER-NAME}".

Task -
Is to design a clone of git repository serach functionality.

Stack -
React.js
Git rest API
Bootstrap
Axios

Code architecture -
Follows clean code architecture.
Code is written in such a way that can we easy read and understood.

What is done to achieve the task -
Uses the concept interceptor to fetch data from git api.
Firstly I have define a function to get all user repositories of a user i.e getUserRepo.
After that I have define a function to search the repositories search by user.
