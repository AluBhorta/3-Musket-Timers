import { parse } from "qs";
const API_URL = `http://localhost:8888`;

export async function getVerifiedUsername() {
  // NOTE: not using react router as not required
  const queryString = window.location.search.slice(1);
  const token = parse(queryString).jwt || null;

  if (token) {
    return fetch(`${API_URL}/api/user?jwt=${token}`)
      .then((response) => response.json())
      .then((response) => response.payload?.username || "")
      .catch((err) => console.error(err));
  }
  return "";
}
