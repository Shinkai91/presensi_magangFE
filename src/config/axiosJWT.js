import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const axiosJWT = axios.create();


axiosJWT.interceptors.request.use(async (config) => {
  try {
    const response = await axios.get("http://localhost:3000/account/token");
    config.headers.Authorization = `Bearer ${response.data.token}`;
    return config;
  } catch (error) {
    if ([401, 403].includes(error.response?.status)) {
      Logout();
    }
    return Promise.reject(error);
  }
});

const Logout = async () => {
  const navigate = useNavigate();
  try {
    await axios.delete('http://localhost:3000/account/logout');
    navigate("/");
  } catch (error) {
    console.log("Error during logout:", error);
  }
}

export default axiosJWT;