import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default axios;

// npx json-server --watch src/db/db.json --port 3000
