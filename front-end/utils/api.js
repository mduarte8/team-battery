const SOCKET_ENDPOINT =
  process.env.REACT_APP_SOCKET_ENDPOINT || "http://localhost:5001";

const headers = new Headers();
headers.append("Content-Type", "application/json");
