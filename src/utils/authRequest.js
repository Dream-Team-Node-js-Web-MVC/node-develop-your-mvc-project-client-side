import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

export async function syncUserData() {
  const userToken = await getCurrentUserToken();

  // process.env.REACT_APP_API_BASE_URL
  // http://localhost:4000

  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/register`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
