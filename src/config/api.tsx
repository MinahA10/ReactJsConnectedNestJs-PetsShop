const API_BASE_URL_REMOTE = "http://localhost:3001";

const API_PATHS = {
  LOGIN: `${API_BASE_URL_REMOTE}/auth/signin`,
  REGISTER: `${API_BASE_URL_REMOTE}/auth/signup`,
  PRODUCTS: `${API_BASE_URL_REMOTE}/product`,
};
export default API_PATHS;
