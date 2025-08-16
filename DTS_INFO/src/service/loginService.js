import axios from "axios";

const loginService = async (username, password) => {
  const URL = "https://jsonplaceholder.typicode.com/users"; // for demo only

  const data = {
    username: username,
    password: password
  };

  const config = {
    method: 'post',
    url: URL,      
    headers: {
      "Content-Type": "application/json"
    },
    data: data      
  };

  const response = await axios.request(config);
  return response;
}

export default loginService;
