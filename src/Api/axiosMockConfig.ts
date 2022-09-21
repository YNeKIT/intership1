import axios from 'axios'

export default axios.create({
    baseURL: 'https://62ac57b7bd0e5d29af209f98.mockapi.io/',
    headers: {"Content-Type": "application/json", }
  // Authorization: `Bearer ${localStorage.token}`,}
});

