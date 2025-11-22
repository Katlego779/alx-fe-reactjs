import axios from "axios";

const BASE_URL = "[https://api.github.com](https://api.github.com)";

export const searchUsers = async (query) => {
try {
const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
return response.data.items;
} catch (error) {
console.error("Error searching users:", error);
return [];
}
};
